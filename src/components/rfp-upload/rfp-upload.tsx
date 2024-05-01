import { uploadNewRfp } from "@/apis/data";
import clsx from "clsx";
import { FormEvent, useState } from "react";

export default function RfpUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  function handleFileEvent(e: any) 
  {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    const uploaded = [...uploadedFiles];

    chosenFiles.some((file)=>{
      if(uploaded.findIndex((f) => f.name === file.name)=== -1){
        uploaded.push(file);
      }
      setUploadedFiles(uploaded)
    })
  }
  
  async function handleSubmit(e: FormEvent<HTMLFormElement>)
  {
    e.preventDefault();
    const formData = new FormData();
    
    const fileList = [File]
    files.forEach((file) => {
      console.log ("Uploading file => " + file.name)      
      formData.append("file", file, file.name);
    })

    // Tell Typescript about "elements" to prevent error 
    const form = e.currentTarget
    const formElements = form.elements as typeof form.elements & {
      rfpid: {value: string}
    }
    formData.append("rfpid", formElements.rfpid.value);


    const ans = await uploadNewRfp(formData).then(res => JSON.stringify(res));
    //console.log("Uploaded RFP Response => " + res)
  }
  
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //convert `FileList` to `File[]`
      const _files = Array.from(e.target.files);
      setFiles(_files);
    }
  };

  return (   
    <div className={clsx(
        "border-stone-500 w-full max-w-md"
      )}>
      <h1 className="capitalize text-2xl p-5 font-bold"> Upload new RFP</h1>        
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
      <div className="mb-4">
        <label className="lock text-gray-700 font-bold mb-2 required">Name Your RFP: {' '} </label>
        <input type="text" id="rfpid" name="RFP Name" placeholder="RFP Name" 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
        <input type="file" multiple={true} onChange={handleFileSelected} 
        className={clsx(
          "shadow bg-blue focus:shadow-outline focus:outline-none rounded"
      //  "file:bg-violet-50 file:text-violet-500 hover:file:bg-violet-100",
      //   "file:rounded-lg file:rounded-tr-none file:rounded-br-none",
      //   "file:py-2 file:mr-4 file:border-none",
      //   // overall input styling
      //   "hover:cursor-pointer border text-gray-400 px-4 py-2 rounded-md",
        )}
        />
        <div className="py-5">
        {files.map( file => (
          <div key={file.name}>
            {file.name}
          </div>
        ))}
      </div>
      <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Upload Files
      </button>
        {/* <button type="submit" className="text-amber-700 bg-violet-50 strong">Upload Files</button> */}
      </form>      
    </div>
  );
}