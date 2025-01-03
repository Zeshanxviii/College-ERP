import { useEffect } from "react";
// import {
//   getAllStudent,
//   getAllFaculty,
//   getAllAdmin,
//   getAllDepartment,
//   getNotice,
// } from "../../redux/actions/adminActions";
import useAdminStore from "../../store/Actions/adminActions";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminHome = () => {
  const {
    getAllStudent,
    getAllFaculty,
    getAllAdmins,
    getAllDepartments,
  } = useAdminStore((state) => ({
    getAllStudent: state.getAllStudent,
    getAllFaculty: state.getAllFaculty,
    getAllAdmins: state.getAllAdmin,
    getAllDepartments: state.getAllDepartment,
  }));

  useEffect(() => {
    const fetchData = async () => {
      await getAllStudent();
      await getAllFaculty();
      await getAllAdmins();
      await getAllDepartments();
    };

    fetchData();
  }, [getAllStudent, getAllFaculty, getAllAdmins, getAllDepartments]);
  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
