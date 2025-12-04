import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "DEVMARKETER - Admin",
    description: "DEVMARKETER - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
