import supabase from "../supabase_config/supabase_client_config";

// có thể chưa viết RLS cho proejct database
export async function listFolders(){
    const { data, error } = await supabase.storage.from('bancongnghe').list('bancongnghe/members', {
        limit: 100,
        offset: 0,
    })
    if(error)
        console.log(error);
    else
        console.log(data);
    return data;
}

// lỗi nội dung render từ server không match với nội dung được render từ trình duyệt -> do lỗi trong useEffect
function getFileURL(){
    const { data } = supabase.storage.from('bancongnghe').getPublicUrl('bancongnghe/member');
    console.log(data.publicUrl);
    return data.publicUrl;
}
export default getFileURL;