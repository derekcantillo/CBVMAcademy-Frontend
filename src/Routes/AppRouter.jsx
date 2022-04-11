import { Routes, Route } from 'react-router-dom';
import { CourseScreen } from '../Components/Courses/CourseScreen';
import { DashboardScreen } from '../Components/Dashboard/DashboardScreen';
import { GroupScreen } from '../Components/Groups/GroupScreen';
import { PromoScreen } from '../Components/Promos/PromoScreen';
import { StudentScreen } from '../Components/Students/StudentScreen';
import { TeacherScreen } from '../Components/Teachers/TeacherScreen';
import { Navbar } from '../Components/ui/navbar';





export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>

                    <Route path="/" element={<DashboardScreen/>} />
                    <Route path="/students" element={<StudentScreen/>} />
                    <Route path="/teachers" element={<TeacherScreen/>} />
                    <Route path="/courses" element={<CourseScreen/>}/>
                    <Route path="/groups" element={<GroupScreen/>}/>
                    <Route path="/promos" element={<PromoScreen/>}/>



                </Routes>
            </div>
        </>
    )
}