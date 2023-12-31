import CustomizedTables from "@/components/Table";
import EventsLayout from "@/components/layouts/EventsLayout";


const rows = [
  {
    id: "Date:",
    title: "Thursday, 19th OCTOBER, 2023",
  },
  {
    id: "Venue:",
    title: "J.F ADE AJAYI MAIN AUDITURIUM, University of Lagos",
  },
  {
    id: "Start:",
    title: "11:00 AM",
  },
];

const Agm = () => {
  return (
    <EventsLayout>
      <section>
        <h1 className="text-[2rem] font-semibold pl-4 mb-[3rem] text-center md:text-left">
          25th Annual General Meeting (AGM)
        </h1>
        <div className="border border-[#0000005d]">
          <h2 className="text-center py-5 px-2 bg-[#f5f5f5]">
            The details of the 25th Annual General Meeting of Unique Unilag
            Staff Cooperative Multipurpose Society Limited are as follows:
          </h2>
          <div className="border border-[#00000009] rounded-[5px] p-5 max-w-max mx-3 my-[2rem]">
            <h2 className="text-center py-5 bg-theme-color">
              25TH ANNUAL GENERAL MEETING
            </h2>
            <CustomizedTables data={rows} width={{large: "100%", small: "100%"}} />
          </div>
        </div>
      </section>
    </EventsLayout>
  );
};

export default Agm;
