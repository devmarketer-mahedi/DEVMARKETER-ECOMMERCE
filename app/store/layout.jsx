import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "DEVMARKETER - Store Dashboard",
    description: "DEVMARKETER - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
