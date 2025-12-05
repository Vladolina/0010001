import React from 'react';
import { User, UserRole } from '../types';

const MOCK_STUDENTS_FULL: User[] = [
  { id: 'U2310002', name: 'ABBOSOV MUXAMMADYOSIN', role: UserRole.STUDENT, email: 'a.muxammadyosin@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310003', name: 'ABDUGANIYEV ABDUVORIS', role: UserRole.STUDENT, email: 'a.abduvoris@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310004', name: 'ABDUKARIMOV XASAN', role: UserRole.STUDENT, email: 'a.xasan@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310005', name: 'ABDUKARIMOV XUSAN', role: UserRole.STUDENT, email: 'a.xusan@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310006', name: 'ABDULAZIZOVA NILUFARBONU', role: UserRole.STUDENT, email: 'a.nilufarbonu@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310007', name: 'ABDULLAYEV SAYID SARDARXAN', role: UserRole.STUDENT, email: 'a.sayid@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310008', name: 'ABDULLOYEV SOLEH', role: UserRole.STUDENT, email: 'a.soleh@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310009', name: 'ABDUMANNONOV ADHAMBEK', role: UserRole.STUDENT, email: 'a.adhambek@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310010', name: 'ABDUMANNONOV ASLIDDIN', role: UserRole.STUDENT, email: 'a.asliddin@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310011', name: 'ABDUQAHHOROV OYBEK', role: UserRole.STUDENT, email: 'a.oybek@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310012', name: 'ABDURAHIMOV JAHONGIR', role: UserRole.STUDENT, email: 'a.jahongir@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310013', name: 'ABDURASULOV ABDUVORIS', role: UserRole.STUDENT, email: 'a.abduvoris@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310014', name: 'ABDURAYIMOV JAVOXIR', role: UserRole.STUDENT, email: 'a.javoxir@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310015', name: 'ABDUSHUKUROV AKMAL', role: UserRole.STUDENT, email: 'a.akmal@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310016', name: 'ABDUVOKHIDOV KHASANBOY', role: UserRole.STUDENT, email: 'a.khasanboy@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310017', name: 'ABDUVOXIDOV SHUKURXO\'JA', role: UserRole.STUDENT, email: 'a.shukurxoja@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310018', name: 'ABDUXOSHIMOV SANJAR', role: UserRole.STUDENT, email: 'a.sanjar@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310019', name: 'ABIROVA SARVINISO', role: UserRole.STUDENT, email: 'a.sarviniso@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310020', name: 'ADILOV RUSTAM', role: UserRole.STUDENT, email: 'a.rustam@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310021', name: 'AITBAYEV ULUG\'BEK', role: UserRole.STUDENT, email: 'a.ulugbek@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310022', name: 'AKBAROV RAXMATULLOH', role: UserRole.STUDENT, email: 'a.raxmatulloh@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310023', name: 'AKBAROV TEMUR', role: UserRole.STUDENT, email: 'a.temur@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310024', name: 'AKRAMOV TEMUR', role: UserRole.STUDENT, email: 'a.temur@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310025', name: 'AKROMOV ASROR', role: UserRole.STUDENT, email: 'a.asror@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310026', name: 'AKROMOV SAYIDAKROM', role: UserRole.STUDENT, email: 'a.sayidakrom@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310027', name: 'ALIQORIYEV ABDULLOH', role: UserRole.STUDENT, email: 'a.abdulloh@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310028', name: 'ALISHEROV SAIDAKBAR', role: UserRole.STUDENT, email: 'a.saidakbar@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310029', name: 'ALMYASHEV DAMIR', role: UserRole.STUDENT, email: 'a.damir@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310030', name: 'AMETOV ABDIRASHIT', role: UserRole.STUDENT, email: 'a.abdirashit@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310031', name: 'AMINBOYEV SIROJIDDIN', role: UserRole.STUDENT, email: 'a.sirojiddin@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310032', name: 'AMIRKULOV AMIR', role: UserRole.STUDENT, email: 'a.amir@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310033', name: 'AN ARTUR', role: UserRole.STUDENT, email: 'a.artur@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310034', name: 'ARZUMANYANS VYACHESLAV', role: UserRole.STUDENT, email: 'a.vyacheslav@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310035', name: 'ASHIROV AMIN', role: UserRole.STUDENT, email: 'a.amin@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310037', name: 'ASHUROV AZAMAT', role: UserRole.STUDENT, email: 'a.azamat@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310038', name: 'ASHUROV IZZATBEK', role: UserRole.STUDENT, email: 'a.izzatbek@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310039', name: 'ASLIDINOVA SABOXAT-BEGIM', role: UserRole.STUDENT, email: 'a.saboxatbegim@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310040', name: 'ASQAROV JO\'RABEK', role: UserRole.STUDENT, email: 'a.jorabek@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310041', name: 'ATAYEV DMITRIY', role: UserRole.STUDENT, email: 'a.dmitriy@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310042', name: 'ATXAMOV RASHSHODBEK', role: UserRole.STUDENT, email: 'a.rashshodbek@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310043', name: 'AUKHADEEV MATVEI', role: UserRole.STUDENT, email: 'a.matvei@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310044', name: 'AXMADOV SUNNAT', role: UserRole.STUDENT, email: 'a.sunnat@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310045', name: 'AXMEDOV A\'ZAMJON', role: UserRole.STUDENT, email: 'a.azamjon@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310046', name: 'AXMEDOV JASURBEK', role: UserRole.STUDENT, email: 'a.jasurbek@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310047', name: 'AXMEDOVA MALIKA', role: UserRole.STUDENT, email: 'a.malika@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310048', name: 'AXMEDOVA SEVINCH', role: UserRole.STUDENT, email: 'a.sevinch@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310049', name: 'AZIMOV IBROXIM', role: UserRole.STUDENT, email: 'a.ibroxim@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310050', name: 'AZIZOV TEMUR', role: UserRole.STUDENT, email: 'a.temur@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310051', name: 'BAHRONOV SOJID', role: UserRole.STUDENT, email: 'b.sojid@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310052', name: 'BAXODIROV AKMAL', role: UserRole.STUDENT, email: 'b.akmal@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310053', name: 'BAXROMOV A\'ZAM', role: UserRole.STUDENT, email: 'b.azam@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310054', name: 'BAXTIYOROVA DIYORA', role: UserRole.STUDENT, email: 'b.diyora@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310055', name: 'BAYBURIN EMIL', role: UserRole.STUDENT, email: 'b.emil@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310056', name: 'BEGMATOVA GULBARA', role: UserRole.STUDENT, email: 'b.gulbara@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310057', name: 'BESHIMOV ULUG\'BEK', role: UserRole.STUDENT, email: 'b.ulugbek@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310058', name: 'BIYNAZOVA MALIKA', role: UserRole.STUDENT, email: 'b.malika@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310059', name: 'BOLTABAYEV AMIR', role: UserRole.STUDENT, email: 'b.amir@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310060', name: 'BOTIROV BAXODIR', role: UserRole.STUDENT, email: 'b.baxodir@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310061', name: 'BOZOROV ARSLONBEK', role: UserRole.STUDENT, email: 'b.arslonbek@student.inha.uz', group: 'CSE 23-01' },
  { id: 'U2310062', name: 'BOZOROV ASADBEK', role: UserRole.STUDENT, email: 'b.asadbek@student.inha.uz', group: 'CSE 23-01' },
];

export const StudentListAdmin: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white">
         {/* Header */}
         <div className="flex items-center justify-between px-8 py-6 border-b-4 border-black">
            <h1 className="text-4xl font-bold">Student list - CSE 23-01</h1>
            <div className="flex gap-2">
                 <button className="bg-gray-200 px-4 py-2 font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none">Filter</button>
                 <button className="bg-gray-200 px-4 py-2 font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none">Export</button>
            </div>
         </div>

         {/* Content */}
         <div className="p-8">
             <div className="border-4 border-black min-h-[600px] relative bg-white overflow-hidden flex flex-col">
                 {/* Table Header */}
                 <div className="flex border-b-2 border-black mt-8 mx-8 pb-4 shrink-0">
                     <div className="w-1/3 text-center text-2xl font-bold underline decoration-4 underline-offset-8">Name</div>
                     <div className="w-1/4 text-center text-2xl font-bold underline decoration-4 underline-offset-8">ID</div>
                     <div className="w-1/6 text-center text-2xl font-bold underline decoration-4 underline-offset-8">Group</div>
                     <div className="w-1/4 text-center text-2xl font-bold underline decoration-4 underline-offset-8">Email</div>
                 </div>

                 {/* List */}
                 <div className="p-8 space-y-4 overflow-y-auto flex-1">
                     {MOCK_STUDENTS_FULL.map((student, idx) => (
                         <div key={idx} className="flex text-lg font-bold border-b border-gray-100 pb-2 hover:bg-gray-50 transition-colors cursor-pointer">
                             <div className="w-1/3 pl-4">{student.name}</div>
                             <div className="w-1/4 text-center">{student.id}</div>
                             <div className="w-1/6 text-center text-gray-600">{student.group}</div>
                             <div className="w-1/4 text-center underline text-blue-800 text-sm">{student.email}</div>
                         </div>
                     ))}
                 </div>
             </div>
         </div>
    </div>
  );
};