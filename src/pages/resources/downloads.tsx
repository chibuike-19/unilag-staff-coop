import CustomizedTables from "@/components/Table";
import React from "react";


type FileDownloadType = {
  downloadLink: string
}
const FileDownload = ({downloadLink}: FileDownloadType) => {
  return (
    <div className="bg-theme-color text-white text-center py-3 rounded-md">
      <a href={downloadLink}>Download</a>
    </div>
  );
}

const Downloads = () => {
  function createData(
    id: number,
    name: string,
    downloadLink: React.ReactNode,

  ) {
    return { id, name, downloadLink };
  }

  const headers1 = ["S/N", "Form Name", "Download Link"];


  const rows = [
    createData(
      1,
      "24th Annual General Meeting (AGM) Report",
      <FileDownload downloadLink="#" />
    ),
    createData(
      2,
      "22nd Annual General Meeting (AGM) Report",
      <FileDownload downloadLink="#" />
    ),
    createData(3, "Annual Financial Report", <FileDownload downloadLink="#" />),
    createData(
      4,
      "21st Annual General Meeting (AGM) Report",
      <FileDownload downloadLink="#" />
    ),
  ];

  return <div className="flex w-full justify-center mt-8">
    <CustomizedTables data={rows} headers={headers1}/>
  </div>;
};

export default Downloads;

