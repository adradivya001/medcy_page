import { supabase } from '../lib/supabaseClient';

/**
 * Links an existing image in the storage bucket to a doctor profile record.
 * 
 * @param fileName The name of the file already in the 'doctor-profile-cards' bucket
 * @param doctorData Basic doctor info (name, specialization)
 */
export async function linkExistingImageToDoctor(
  fileName: string,
  doctorData: {
    doctor_name: string;
    specialization?: string;
    expertise_highlights?: string[];
  }
) {
  try {
    // 1. Get the public URL for the file
    const { data: publicUrlData } = supabase.storage
      .from('doctor-profile-cards')
      .getPublicUrl(fileName);

    const publicUrl = publicUrlData.publicUrl;

    // 2. Insert into the doctor_profile_cards table
    const { data, error } = await supabase
      .from('doctor_profile_cards')
      .insert([
        {
          ...doctorData,
          image_url: publicUrl,
          is_active: true,
          display_order: 0
        },
      ])
      .select()
      .single();

    if (error) throw error;
    
    console.log('Successfully linked image:', data);
    return data;
  } catch (error) {
    console.error('Failed to link image:', error);
    throw error;
  }
}

/**
 * Example usage:
 * 
 * linkExistingImageToDoctor('dr_smith.jpg', { 
 *   doctor_name: 'Dr. Smith', 
 *   specialization: 'Neurology' 
 * });
 */
