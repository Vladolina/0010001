import React from 'react';
import { Course } from '../types';

const MOCK_COURSES: Course[] = [
  { id: '1', code: 'SOC3010', name: 'Operating System', section: '001' },
  { id: '2', code: 'CSE3020', name: 'Database Systems', section: '002' },
  { id: '3', code: 'ICE2010', name: 'Computer Architecture', section: '001' },
  { id: '4', code: 'MAT1010', name: 'Calculus I', section: '003' },
  { id: '5', code: 'PHY1010', name: 'General Physics', section: '001' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-4">
        {MOCK_COURSES.map((course) => (
          <div 
            key={course.id} 
            className="flex items-center gap-4 group cursor-pointer"
          >
            {/* Course Code Block */}
            <div className="border-2 border-black px-4 py-2 font-bold text-lg bg-white group-hover:bg-slate-50 min-w-[120px] text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {course.code}
            </div>
            {/* Course Name Block */}
            <div className="flex-1 border-2 border-black px-6 py-2 font-bold text-lg bg-white group-hover:bg-slate-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center">
              <span>{course.name} - [Section {course.section}]</span>
              <span className="text-sm font-normal text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">View Details &rarr;</span>
            </div>
          </div>
        ))}
        
        {/* Empty slots for visual fidelity to mockup */}
        {[1, 2].map((i) => (
            <div key={`empty-${i}`} className="flex items-center gap-4 opacity-50">
                <div className="border-2 border-black border-dashed px-4 py-2 font-bold text-lg min-w-[120px] text-center text-transparent">.</div>
                <div className="flex-1 border-2 border-black border-dashed px-6 py-2 font-bold text-lg text-transparent">.</div>
            </div>
        ))}
      </div>
    </div>
  );
};