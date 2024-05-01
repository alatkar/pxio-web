import { Message } from 'ai/react';
import { remark } from 'remark';
import html from 'remark-html';

export async function chat(formData: FormData) {

  const timeout = 300000;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  console.log("Prompt => " + formData.get("prompt"))

  const res = await fetch('http://localhost:5000/rfps/chat', 
      {
        method: "POST", 
        body: formData
      }, 
  ).then((res) => {res.json()}).then((res) => {console.log(res)})

  return res;
}

export async function POST(messages: Message[] ) {

  console.log("in POST" )
  const timeout = 300000;
  
  

  return "asututuas";
}