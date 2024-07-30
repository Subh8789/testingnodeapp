import react, { useEffect ,useState} from "react";

import axios from "axios";

export default async function useDownloader() {
     try {
        const response = await axios.get(
          "https://res.cloudinary.com/dz8qhefe6/image/upload/v1721397461/202-LS-014-2020.pdf",
          {
            responseType: "blob", 
          }
        );

        // Create a Blob from the response data
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });

        // Create a temporary URL for the Blob
        const url = window.URL.createObjectURL(pdfBlob);

        // Create a temporary <a> element to trigger the download
        const tempLink = document.createElement("a");
        tempLink.href = url;
        tempLink.setAttribute(
          "download",
         // `bill_${User_Id}_${date}.pdf`
            "bill.pdf"
        ); // Set the desired filename for the downloaded file

        // Append the <a> element to the body and click it to trigger the download
        document.body.appendChild(tempLink);
        tempLink.click();

        // Clean up the temporary elements and URL
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading PDF:", error);
      }
    
}