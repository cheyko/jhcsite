import React, { useState, useEffect } from 'react';
//import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const Test = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  const [numPages, setNumPages] = useState(null);
  const param = props.match.params.id;
  console.log(param);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const documentList = [
    {
        id : 0,
        src : '/documents/Jamaican-Citizenship-Application-Descent.pdf',
        title: ' Citizen Application Form - Descent '
    },
    {
        id : 1,
        src : '/documents/Jamaican-Citizenship-Application-Marriage.pdf',
        title : ' Citizen Application Form - Marriage '
    },
    {
        id : 2,
        src : '/documents/Jamaican-Passport-Form&Guidelines.pdf',
        title : ' Jamaicn Passport Form & Guidelines '
    },
    {
        id : 3,
        src : '/documents/Visa-Application-Form&Requirements.pdf',
        title : ' Visa Application Form & Requirements '
    }

  ]

  return (
    <div className="hero">
     <strong> <i className="fa fa-file-pdf-o"></i> <a download href={process.env.PUBLIC_URL + documentList[param].src}> Download {documentList[param].title}</a> </strong>
        <p>Number of Pages {numPages}</p>
        <div className="pdf-container">
            <Document
                file={process.env.PUBLIC_URL + documentList[param].src}
                onLoadSuccess={onDocumentLoadSuccess}
                >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
      
    </div>
  );
}

export default Test;