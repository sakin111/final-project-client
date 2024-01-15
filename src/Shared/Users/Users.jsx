import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const Users = () => {
    const {axiosSecure} = useAxiosSecure()



    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get('/users')
                return res.data

            }
            catch (error) {
               
                console.error("Error fetching users:", error);
                throw new Error("Failed to fetch users. Please try again.");
            }
        }


    })


    const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        })
            .catch(error => {
                // Handle error here
                console.error("Error deleting user:", error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to delete user. Please try again.",
                    icon: "error"
                });
            });
    }

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.email} is now admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                // Handle error here
                console.error("Error making user admin:", error);
                Swal.fire({
                    title: "Error",
                    text: "Failed to make user admin. Please try again.",
                    icon: "error"
                });
            });
    }



    return (
        <div>
            <div className="flex justify-evenly ">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users : {users.length}</h2>
            </div>




            <div className="overflow-x-auto">
                <table className="table table-zebra w-full rounded-md">
                    {/* head */}
                    <thead>
                        <tr>

                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            users.map((user, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{user.name ? user.name : <p>null</p>}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? (
                                            'Admin'
                                        ) : (
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-lg bg-orange-400"
                                            >
                                                <FaUsers className=" text-white"></FaUsers>
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;