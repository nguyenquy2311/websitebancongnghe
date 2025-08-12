'use client';
import getFileURL from "@/lib/supabaseServices/getImages";
import { listFolders } from "@/lib/supabaseServices/getImages";
import { useEffect } from "react";

function Page(){
    const data = getFileURL();
    console.log(data);

    return (
        <div>Hello World</div>
    )
}

export default Page;