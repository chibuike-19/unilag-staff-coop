import TrusteesCard from "@/components/about-components/TrusteesCard";
import AboutLayout from "@/components/layouts/AboutLayout";

const TrusteesLists = [
  {
    name: "President - YEKEEN ADEMOLA ADEWUYI",
    desc: "Yekeen Ademola ADEWUYI is the President of Unique Unilag Staff Cooperative Multipurpose Society Limited. He was elected as the President at the 2018 Annual General Meeting (AGM) of the Society, a position he still occupies till date. Before his election as the President, he had served the Society in various capacities, as the Chairman, Supervisory Committee (2006-2010), the Treasurer, ( 2010-2014.) and as well as the Vice President (2014-2018).   Adewuyi has also served the University of Lagos Community at several forums in his capacity as an Accountant. In 2005, he was appointed as the Auditor of the Senior Staff Association of Nigerian Universities (SSANU, Unilag Branch) and SSANU Contributory Welfare Scheme in 2009 respectively. He has been of great assets to the Cooperative Society in the area of Estate Management and Development. In addition, he served the Unilag Muslim Community as a financial coordinator of ISL and DLI from 2013 -2018 just to mention a few.   He holds a Bachelors of Science Degree in Accountancy, a Masters of Business Administration (MBA) Degree, in 2004, from the University of Ado-Ekiti, Ado-Ekiti, Ekiti State and also awarded a Higher National Diploma (HND) by the prestigious Yaba College of Technology, Yaba-Lagos, in Accountancy and Finance in the year 1995. Further more, he bagged a Postgraduate Professional Diploma in Accounting from Nigerian College of Accountancy, Kwali, Jos, Plateau State; in 2017.   Furthermore, he is also a member of some prestigious professional associations. This includes Member, Association of National Accountants of Nigeria (ANAN); Fellow, Chartered Institute of Loan and Risk Management (FCIRLM) and Member, Chartered Institute of Local Government and Public Administration of Nigeria.   He attended several Trainings, Workshops, Seminars and Certificate Courses, particularly in Cooperative Management. Amongst these was his participation in a course titled “Role of Financial Indices in Cooperative Management”, in the year 2016. He had also in 2007 taken a Certificate Course on “Cooperative as a Tool for Social and Economic Security”. Finally, he participated at a U+2018Train the Trainers Workshop”, under the auspices of the United States of America and the Federal Government of Nigeria Funds for HIV/AIDS Relief (PEPFAR Project).   Adewuyi is not just a man of books. His academic prowess as made him to be saddled with so many responsibilities within and outside his professional capacity. He worked in cash office, the treasury unit of University of Lagos and International School, Unilag for several years. In 2013-2019, he was appointed as the Head, Faculty Finance Office, Faculty of Arts and Social Sciences respectively. At present, he is the Head of Account Section, Works and Physical planning Department, University of Lagos, Akoka.   To crown it all, Adewuyi, Yekeen Ademola has been recently elected as the first VP (1), Lagos Mainland Multipurpose Cooperative Union for the first term period of four years commencing from 2020.   He is happily married with children, and lives with his family in Lagos.",
  },
  {
    name: "Secretary - Abeke Olanrewaju ADEOYE",
    desc: "Abeke Olanrewaju ADEOYE is the General Secretary and Member, Management Committee of Unique Unilag Staff Multipurpose Cooperative Society. She was enormously elected by members of the Society as the General Secretary at the 2018 Annual General Meeting (AGM) of the Society.   Prior to being elected to her present position as the General Secretary, Mrs Adeoye has served the University of Lagos- in particular, and the Nigerian Nation- in general, in her capacity as a Sports Personality of repute, and also as a Trained and Certified Educationist of over thirty (30) years post qualification experience.   To start with, Mrs Adeoye was the Head Mistress, Bellina Nursery and Primary School, Akoka, Lagos, for two years, where she coordinates the activities of the school, amongst other responsibilities. She once also worked at Our Lady of Apostle Schools, Yaba, Lagos; Government College, Surulere, Lagos; and at Nazareth Nursery and Primary School, Ijeshatedo, Surulere, Lagos, before joining the service of the University of Lagos Staff School.   In serving her fatherU+2019s land, Nigeria, Lanre Adeoye (Nee Jenkins) represented the Old Western State at the 1975 National Sports Festival held in Lagos. She also represented the old Ondo State, comprising of the later created Ekiti State, at the 1978 National Sports Festival held in Kaduna, and at the 1980 edition of the Festival held in Benin City, capital of the former Bendel State.   Furthermore, Mrs Adeoye, in the aftermath of her excellent performance at the 1982 Nigerian University Games Association (NUGA Games), held at the University of Ibadan (UI), was awarded the University of Lagos “Sports Full Colours for Outstanding Performance in Athletics” having won one (1) gold medal, two (2) silver medals, and one (1) bronze medal in athletics for the University.   Four years later, she was also awarded yet another University of Lagos “Sports Full Colours for Outstanding Performance in Athletics” in the aftermath of her outstanding performance at the 1986 NUGA having won two (2) gold medals, two (2) silver medals, and two (2) bronze medals in athletics for Unilag.   Similarly, she was also decorated as the University of Lagos Sports Woman of the Year Award, 1984; and was also a recipient of the Vice ChancellorU+2019s Scholarship Award for her Masters Degree.   Mrs Adeoye did not only excel in Sports. She is a 1984 graduate of the University of Lagos, Akoka, where she was awarded the Bachelors of Arts in Education (B.A.Ed. Hons) Degree in Guidance and Counselling by the Senate of the University. She was also awarded the Degree of Masters of Education (M.Ed.) in Educational Foundation, University of Lagos, Akoka, in 1984 and 1986 respectively. She also holds an Advanced Diploma in Human Resource Management from the University of Lagos in 2012.   Mrs Lanre Adeoye, who is also a member of the UniversityU+2019s Senior Staff Club, member of the University of Lagos Women Society, and Member of Unilag Alumni (Lagos Branch) is happily married with children and lives with her family in Lagos.",
  },
  {
    name: "Treasurer - Alabi Sunday TAIWO",
    desc: "Alabi Sunday TAIWO is the Treasurer of Unique Unilag Staff Multipurpose Cooperative Society Limited, and also a Member of the Management Committee of Society. He was enormously elected by members of the Society as the Treasurer at the 2018 Annual General Meeting (AGM) of the Society. He has also served the University of Lagos Community in various capacities.   Taiwo was the financial secretary of our great society between 2014 and 2018 and also served in various committees of the society.   Taiwo holds a Bachelors of Science (B.Sc.) Degree, from the prestigious University of Lagos. He had been an Associate Chartered Account (ACA), Institute of Chartered Accountant of Nigeria (ICAN), since 2007.   Taiwo served the University of Lagos in various departments in his professional capacity as an accountant. He was at the Unilag Bookshop from 2005-2013, Unilag Consult from 2013-2017.   He is presently serving the University of Lagos at the Research and Innovation office. He is happily married with children.",
  },
];

const Trustees = () => {
  const allTrustees = TrusteesLists.map((trustee, index) => (
    <TrusteesCard key={index} {...trustee} />
  ));
  return (
    <AboutLayout>
      <section>
        <h1 className="text-[2rem] font-semibold pl-4 mb-[3rem] text-center md:text-left">
          Our Trustees
        </h1>
        <div>{allTrustees}</div>
      </section>
    </AboutLayout>
  );
};

export default Trustees;
