import React, { useState, useRef } from 'react';
import { User, UserRole } from '../types';
import { Upload } from 'lucide-react';
import { FingerprintScanner } from './FingerprintScanner';

interface AttendanceProps {
  user: User;
}

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------
const WEEKS = Array.from({ length: 15 }, (_, i) => i + 1);

// Professor View Data - 60 Students from U2310 cohort
const PROF_VIEW_STUDENTS = [
  { id: 'U2310002', name: 'ABBOSOV MUXAMMADYOSIN', absences: 0 },
  { id: 'U2310003', name: 'ABDUGANIYEV ABDUVORIS', absences: 1 },
  { id: 'U2310004', name: 'ABDUKARIMOV XASAN', absences: 2 },
  { id: 'U2310005', name: 'ABDUKARIMOV XUSAN', absences: 0 },
  { id: 'U2310006', name: 'ABDULAZIZOVA NILUFARBONU', absences: 1 },
  { id: 'U2310007', name: 'ABDULLAYEV SAYID SARDARXAN', absences: 0 },
  { id: 'U2310008', name: 'ABDULLOYEV SOLEH', absences: 3 },
  { id: 'U2310009', name: 'ABDUMANNONOV ADHAMBEK', absences: 0 },
  { id: 'U2310010', name: 'ABDUMANNONOV ASLIDDIN', absences: 0 },
  { id: 'U2310011', name: 'ABDUQAHHOROV OYBEK', absences: 1 },
  { id: 'U2310012', name: 'ABDURAHIMOV JAHONGIR', absences: 0 },
  { id: 'U2310013', name: 'ABDURASULOV ABDUVORIS', absences: 0 },
  { id: 'U2310014', name: 'ABDURAYIMOV JAVOXIR', absences: 2 },
  { id: 'U2310015', name: 'ABDUSHUKUROV AKMAL', absences: 0 },
  { id: 'U2310016', name: 'ABDUVOKHIDOV KHASANBOY', absences: 0 },
  { id: 'U2310017', name: 'ABDUVOXIDOV SHUKURXO\'JA', absences: 1 },
  { id: 'U2310018', name: 'ABDUXOSHIMOV SANJAR', absences: 0 },
  { id: 'U2310019', name: 'ABIROVA SARVINISO', absences: 0 },
  { id: 'U2310020', name: 'ADILOV RUSTAM', absences: 4 },
  { id: 'U2310021', name: 'AITBAYEV ULUG\'BEK', absences: 0 },
  { id: 'U2310022', name: 'AKBAROV RAXMATULLOH', absences: 0 },
  { id: 'U2310023', name: 'AKBAROV TEMUR', absences: 0 },
  { id: 'U2310024', name: 'AKRAMOV TEMUR', absences: 1 },
  { id: 'U2310025', name: 'AKROMOV ASROR', absences: 0 },
  { id: 'U2310026', name: 'AKROMOV SAYIDAKROM', absences: 0 },
  { id: 'U2310027', name: 'ALIQORIYEV ABDULLOH', absences: 0 },
  { id: 'U2310028', name: 'ALISHEROV SAIDAKBAR', absences: 2 },
  { id: 'U2310029', name: 'ALMYASHEV DAMIR', absences: 0 },
  { id: 'U2310030', name: 'AMETOV ABDIRASHIT', absences: 0 },
  { id: 'U2310031', name: 'AMINBOYEV SIROJIDDIN', absences: 0 },
  { id: 'U2310032', name: 'AMIRKULOV AMIR', absences: 0 },
  { id: 'U2310033', name: 'AN ARTUR', absences: 1 },
  { id: 'U2310034', name: 'ARZUMANYANS VYACHESLAV', absences: 0 },
  { id: 'U2310035', name: 'ASHIROV AMIN', absences: 0 },
  { id: 'U2310037', name: 'ASHUROV AZAMAT', absences: 3 },
  { id: 'U2310038', name: 'ASHUROV IZZATBEK', absences: 0 },
  { id: 'U2310039', name: 'ASLIDINOVA SABOXAT-BEGIM', absences: 0 },
  { id: 'U2310040', name: 'ASQAROV JO\'RABEK', absences: 0 },
  { id: 'U2310041', name: 'ATAYEV DMITRIY', absences: 0 },
  { id: 'U2310042', name: 'ATXAMOV RASHSHODBEK', absences: 2 },
  { id: 'U2310043', name: 'AUKHADEEV MATVEI', absences: 0 },
  { id: 'U2310044', name: 'AXMADOV SUNNAT', absences: 0 },
  { id: 'U2310045', name: 'AXMEDOV A\'ZAMJON', absences: 1 },
  { id: 'U2310046', name: 'AXMEDOV JASURBEK', absences: 0 },
  { id: 'U2310047', name: 'AXMEDOVA MALIKA', absences: 0 },
  { id: 'U2310048', name: 'AXMEDOVA SEVINCH', absences: 0 },
  { id: 'U2310049', name: 'AZIMOV IBROXIM', absences: 0 },
  { id: 'U2310050', name: 'AZIZOV TEMUR', absences: 0 },
  { id: 'U2310051', name: 'BAHRONOV SOJID', absences: 0 },
  { id: 'U2310052', name: 'BAXODIROV AKMAL', absences: 5 },
  { id: 'U2310053', name: 'BAXROMOV A\'ZAM', absences: 0 },
  { id: 'U2310054', name: 'BAXTIYOROVA DIYORA', absences: 0 },
  { id: 'U2310055', name: 'BAYBURIN EMIL', absences: 0 },
  { id: 'U2310056', name: 'BEGMATOVA GULBARA', absences: 0 },
  { id: 'U2310057', name: 'BESHIMOV ULUG\'BEK', absences: 0 },
  { id: 'U2310058', name: 'BIYNAZOVA MALIKA', absences: 1 },
  { id: 'U2310059', name: 'BOLTABAYEV AMIR', absences: 0 },
  { id: 'U2310060', name: 'BOTIROV BAXODIR', absences: 0 },
  { id: 'U2310061', name: 'BOZOROV ARSLONBEK', absences: 0 },
  { id: 'U2310062', name: 'BOZOROV ASADBEK', absences: 0 },
];

// Student View Data (Courses)
const STUDENT_VIEW_COURSES = [
    { name: 'Database', absences: [3] }, // Absent on week 2.1 (index 3)
    { name: 'Operating System', absences: [] },
    { name: 'System Analysis', absences: [14] },
    { name: 'Engineering Communications', absences: [] },
    { name: 'Computer Algorithm', absences: [] },
    { name: 'History', absences: [] },
    { name: 'Academic English', absences: [] },
    { name: 'Java Programming', absences: [] },
];

// -----------------------------------------------------------------------------
// Professor View Component
// -----------------------------------------------------------------------------
const ProfessorAttendanceView: React.FC = () => {
    const [markingMode, setMarkingMode] = useState(false);
    const [showFingerprint, setShowFingerprint] = useState(false);
    const [attendanceData, setAttendanceData] = useState<Record<string, boolean>>({});

    const handleStartMarking = () => {
        if (!markingMode) {
            // Start process: Show fingerprint scanner
            setShowFingerprint(true);
        } else {
            // Stop process
            setMarkingMode(false);
        }
    };

    const handleFingerprintComplete = () => {
        setShowFingerprint(false);
        setMarkingMode(true);
    };

    const toggleAttendance = (studentId: string, weekIndex: number) => {
        if (!markingMode) return;
        const key = `${studentId}-${weekIndex}`;
        setAttendanceData(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="flex flex-col h-full bg-white relative">
            {showFingerprint && <FingerprintScanner onComplete={handleFingerprintComplete} />}

            <div className="flex border-b-4 border-black">
                <div className="w-1/4 p-4 border-r-4 border-black">
                    <h1 className="text-3xl font-bold">Course name</h1>
                    <h2 className="text-2xl font-bold text-gray-700">Section 001</h2>
                </div>
                <div className="flex-1 p-4 flex justify-between items-center bg-white">
                     <h1 className="text-3xl font-bold">Inha University in Tashkent</h1>
                     <button 
                        onClick={handleStartMarking}
                        className={`${markingMode ? 'bg-red-500 hover:bg-red-600' : 'bg-[#10b981] hover:bg-[#059669]'} text-white font-bold py-3 px-6 rounded shadow-md transition-colors`}
                     >
                        {markingMode ? 'Finish marking attendance' : 'Start marking attendance'}
                     </button>
                </div>
            </div>

            <div className="flex border-b-2 border-black bg-gray-50">
                <div className="w-64 flex-shrink-0 flex">
                    <div className="w-1/2 p-3 font-bold text-xl border-r-2 border-black flex items-center justify-center">Name</div>
                    <div className="w-1/2 p-3 font-bold text-xl border-r-2 border-black flex items-center justify-center">ID</div>
                </div>
                <div className="flex-1 flex">
                     <div className="flex-1 p-3 font-bold text-xl text-center border-r-2 border-black">Weeks & Lecture</div>
                     <div className="w-32 p-3 font-bold text-sm text-center flex items-center justify-center">Total Absences</div>
                </div>
            </div>

            <div className="flex border-b-2 border-black">
                 <div className="w-64 flex-shrink-0 border-r-2 border-black bg-white"></div>
                 <div className="flex-1 flex">
                    {WEEKS.map(week => (
                        <div key={week} className="flex-1 border-r-2 border-black flex flex-col">
                            <div className="h-8 border-b border-black flex items-center justify-center text-xs font-bold bg-gray-100">{week}.1</div>
                            <div className="h-8 flex items-center justify-center text-xs font-bold bg-gray-100">{week}.2</div>
                        </div>
                    ))}
                    <div className="w-32"></div>
                 </div>
            </div>

            <div className="overflow-y-auto flex-1 pb-10">
                {PROF_VIEW_STUDENTS.map((student) => (
                    <div key={student.id} className="flex border-b border-black h-16 hover:bg-slate-50">
                        <div className="w-64 flex-shrink-0 flex border-r-2 border-black">
                            <div className="w-1/2 p-2 text-xs font-bold border-r border-gray-300 flex items-center justify-center text-center leading-tight">
                                {student.name}
                            </div>
                            <div className="w-1/2 p-2 text-xs font-semibold flex items-center justify-center">{student.id}</div>
                        </div>
                        
                        <div className="flex-1 flex">
                            {WEEKS.map(week => {
                                const idx1 = week * 2 - 2;
                                const idx2 = week * 2 - 1;
                                return (
                                <div key={week} className="flex-1 border-r-2 border-black flex flex-col">
                                    <div onClick={() => toggleAttendance(student.id, idx1)} className={`flex-1 border-b border-gray-300 cursor-pointer ${attendanceData[`${student.id}-${idx1}`] ? 'bg-red-200' : ''}`}>
                                        {attendanceData[`${student.id}-${idx1}`] && <div className="w-full h-full flex items-center justify-center text-red-600 font-bold">A</div>}
                                    </div>
                                    <div onClick={() => toggleAttendance(student.id, idx2)} className={`flex-1 cursor-pointer ${attendanceData[`${student.id}-${idx2}`] ? 'bg-red-200' : ''}`}>
                                         {attendanceData[`${student.id}-${idx2}`] && <div className="w-full h-full flex items-center justify-center text-red-600 font-bold">A</div>}
                                    </div>
                                </div>
                            )})}
                             <div className="w-32 flex items-center justify-center font-bold text-lg border-l-2 border-black">
                                {student.absences + Object.keys(attendanceData).filter(k => k.startsWith(student.id)).length}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// -----------------------------------------------------------------------------
// Student View Component
// -----------------------------------------------------------------------------
const StudentAttendanceView: React.FC<{ user: User }> = ({ user }) => {
    const [popupSlot, setPopupSlot] = useState<{course: string, weekIdx: number, top: number, left: number} | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleCellClick = (e: React.MouseEvent, courseName: string, weekIdx: number, isAbsent: boolean) => {
        if (!isAbsent) return;
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        setPopupSlot({
            course: courseName,
            weekIdx: weekIdx,
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX - 100 
        });
        setFileName(null);
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = () => {
        if (!fileName) {
            alert("Please select a file first.");
            return;
        }
        alert(`Medical certificate '${fileName}' submitted to Professor and Academic Affairs.`);
        setPopupSlot(null);
    };

    return (
        <div className="flex flex-col h-full bg-white relative">
            {/* Popover for Medical Certificate */}
            {popupSlot && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setPopupSlot(null)}></div>
                    <div 
                        className="absolute z-50 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 rounded-lg w-80 flex flex-col items-center gap-3 animate-in fade-in zoom-in duration-200"
                        style={{ top: popupSlot.top + 10, left: Math.max(10, popupSlot.left) }}
                    >
                        <div className="text-sm font-bold text-center">
                            After clicking to absence(0) date:<br/>Upload your medical certificate
                        </div>
                        
                        <input 
                            type="file" 
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden" 
                        />

                        <div 
                            onClick={handleUploadClick}
                            className="w-full h-32 border-2 border-dashed border-gray-400 rounded bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                            <Upload size={32} className="text-gray-400 mb-2"/>
                            <span className="text-xs text-gray-500 font-bold">
                                {fileName ? fileName : 'Click to browse'}
                            </span>
                        </div>
                        <button 
                            onClick={handleSubmit}
                            className="bg-[#10b981] hover:bg-[#059669] text-white w-full py-2 rounded font-bold shadow-md active:translate-y-1 active:shadow-none transition-all"
                        >
                            Submit
                        </button>
                        
                        {/* Little triangle pointer */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-black transform rotate-45"></div>
                    </div>
                </>
            )}

            {/* Table Header */}
            <div className="flex border-b-4 border-black bg-white">
                <div className="w-1/4 flex-shrink-0 p-4 border-r-4 border-black flex items-center justify-center">
                    <h1 className="text-3xl font-bold">Subjects</h1>
                </div>
                <div className="flex-1 p-4 flex items-center justify-center">
                    <h1 className="text-3xl font-bold">Weeks & Lecture</h1>
                </div>
                <div className="w-32 flex-shrink-0 p-4 border-l-4 border-black flex items-center justify-center">
                     <h1 className="text-sm font-bold text-center">Total absences</h1>
                </div>
            </div>

            {/* Weeks Row */}
            <div className="flex border-b-2 border-black">
                 <div className="w-1/4 flex-shrink-0 border-r-2 border-black bg-white flex items-center justify-center font-bold text-xl py-2">
                    Courses
                 </div>
                 <div className="flex-1 flex">
                    {WEEKS.map(week => (
                        <div key={week} className="flex-1 border-r-2 border-black flex flex-col">
                            <div className="h-6 border-b border-black flex items-center justify-center text-[10px] font-bold bg-gray-100">{week}.1</div>
                            <div className="h-6 flex items-center justify-center text-[10px] font-bold bg-gray-100">{week}.2</div>
                        </div>
                    ))}
                 </div>
                 <div className="w-32 border-l-2 border-black"></div>
            </div>

            {/* Course Rows */}
            <div className="overflow-y-auto flex-1 pb-10">
                {STUDENT_VIEW_COURSES.map((course, idx) => (
                    <div key={idx} className="flex border-b border-black h-14 hover:bg-slate-50">
                        <div className="w-1/4 flex-shrink-0 border-r-2 border-black p-3 font-bold text-sm flex items-center justify-center text-center">
                            {course.name}
                        </div>
                        
                        <div className="flex-1 flex">
                            {WEEKS.map(week => {
                                const idx1 = week * 2 - 2;
                                const idx2 = week * 2 - 1;
                                const isAbsent1 = course.absences.includes(idx1);
                                const isAbsent2 = course.absences.includes(idx2);

                                return (
                                <div key={week} className="flex-1 border-r-2 border-black flex flex-col">
                                    {/* Lecture 1 */}
                                    <div 
                                        onClick={(e) => handleCellClick(e, course.name, idx1, isAbsent1)}
                                        className={`flex-1 border-b border-gray-300 flex items-center justify-center text-xs font-bold transition-colors
                                            ${isAbsent1 ? 'bg-red-50 cursor-pointer hover:bg-red-100 text-red-600' : ''}`}
                                    >
                                        {isAbsent1 ? '0' : ''}
                                    </div>
                                    {/* Lecture 2 */}
                                    <div 
                                        onClick={(e) => handleCellClick(e, course.name, idx2, isAbsent2)}
                                        className={`flex-1 flex items-center justify-center text-xs font-bold transition-colors
                                            ${isAbsent2 ? 'bg-red-50 cursor-pointer hover:bg-red-100 text-red-600' : ''}`}
                                    >
                                         {isAbsent2 ? '0' : ''}
                                    </div>
                                </div>
                            )})}
                        </div>
                        <div className="w-32 border-l-2 border-black flex items-center justify-center font-bold text-lg">
                            {course.absences.length > 0 ? course.absences.length : ''}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Attendance: React.FC<AttendanceProps> = ({ user }) => {
    if (user.role === UserRole.STUDENT) {
        return <StudentAttendanceView user={user} />;
    }
    return <ProfessorAttendanceView />;
};