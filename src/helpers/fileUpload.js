export const fileUpload = async (file) => {
    if (!file) throw new Error("File not found");

    const cloudUrl = "https://api.cloudinary.com/v1_1/ddge04ykc/upload";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "react-journal-app");

    try {
        const resp = await fetch(cloudUrl, { method: "POST", body: formData });

        if (!resp.ok) {
            throw new Error(`Error uploading file: ${resp.statusText}`);
        }

        const cloudResp = await resp.json();
        return cloudResp;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};
