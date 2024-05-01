import { remark } from 'remark';
import html from 'remark-html';

export async function fetchRfps() {
  const headers = new Headers()
  headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');

  const res = await fetch('http://localhost:5000/rfps/', 
  {headers: headers})
  // const rfps = await res.json()
  return res;
}

export async function fetchRfpSummary(rfpId: string) {
  const headers = new Headers()
  headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');

  const res = await fetch(`http://localhost:5000/rfps/${rfpId}/summary`, 
  {headers: headers})
  // const rfps = await res.json()
  return res;
}

export async function fetchProposal(proposalId: string) {
  const headers = new Headers()
  headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');

  const res = await fetch(`http://localhost:5000/proposals/${proposalId}`, 
  {headers: headers})
  // const rfps = await res.json()
  return res;
}

export async function uploadNewRfp(formData: FormData) {

  const timeout = 300000;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  console.log("Files => " + formData.getAll("file"))

  const res = await fetch('http://localhost:5000/rfps/', 
      {
        method: "POST", 
        body: formData
      }, 
  ).then((res) => {res.json()}).then((res) => {console.log(res)})

  // Use remark to convert markdown into HTML string
  // const processedContent = remark()
  //   .use(html)
  //   .process(res.;
  // const contentHtml = processedContent.toString();

  // const rfps = await res.json()
  return res;
}

async function fetchWithTimeout(resource: URL, options = {}) {
  const timeout = 8000;
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal  
  });
  clearTimeout(id);

  return response;
}