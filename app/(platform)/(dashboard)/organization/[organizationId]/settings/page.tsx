import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
    return (
        <div className="w-full">
            <OrganizationProfile
            appearance={{
                elements: {
                    rootBox: {
                        boxShadow: "none",
                        width: "100%"
                    },
                 card: {
                    border: "1px solid #b7b7b7",
                    boxShadow: "none",
                    width: "100%"
                 }
                }
            }}
            />
        </div>
    );
};

export default SettingsPage;