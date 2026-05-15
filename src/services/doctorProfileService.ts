
// Service for managing doctor profile cards from Supabase
import { supabase } from '../lib/supabaseClient';

export interface DoctorProfileCard {
  id: string;
  doctor_name: string;
  specialization?: string;
  expertise_highlights?: string[];
  image_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

/**
 * Uploads an image to the Supabase storage bucket and saves the doctor profile
 * to the `doctor_profile_cards` table.
 * 
 * @param file The image file to upload
 * @param doctorName The name of the doctor
 * @param specialization The doctor's specialization
 * @param expertise The expertise highlights
 * @param displayOrder The display order for the UI
 * @returns The newly created doctor profile card record
 */
export async function uploadDoctorProfileCard(
  file: File,
  doctorName: string,
  specialization: string = '',
  expertise: string[] = [],
  displayOrder: number = 0
): Promise<DoctorProfileCard> {
  try {
    // 1. Upload image to "doctor-profile-cards" bucket
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('doctor-profile-cards')
      .upload(filePath, file);

    if (uploadError) {
      throw new Error(`Error uploading image: ${uploadError.message}`);
    }

    // 2. Generate public URL
    const { data: publicUrlData } = supabase.storage
      .from('doctor-profile-cards')
      .getPublicUrl(filePath);

    const publicUrl = publicUrlData.publicUrl;

    // 3. Save doctor_name + image_url into doctor_profile_cards table
    const { data: insertData, error: dbError } = await supabase
      .from('doctor_profile_cards')
      .insert([
        {
          doctor_name: doctorName,
          specialization: specialization,
          expertise_highlights: expertise,
          image_url: publicUrl,
          display_order: displayOrder,
          is_active: true,
        },
      ])
      .select()
      .single();

    if (dbError) {
      throw new Error(`Error saving record to database: ${dbError.message}`);
    }

    return insertData as DoctorProfileCard;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
}

/**
 * Fetches only active doctor cards, sorted by display_order ascending.
 * 
 * @returns Array of active doctor profile cards
 */
export async function getActiveDoctorProfileCards(): Promise<DoctorProfileCard[]> {
  try {
    const { data, error } = await supabase
      .from('doctor_profile_cards')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) {
      throw new Error(`Error fetching doctor cards: ${error.message}`);
    }

    return data as DoctorProfileCard[];
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
}
