import { ImageList, ImageListItem } from "@mui/material";
import { itemData } from "src/data/data";

export const ImageGallery = ({ imgs }) => {
    return (
        <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
            {imgs.map((img) => (
                <ImageListItem key={img.public_id}>
                    <img
                        srcSet={`${img.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${img.url}?w=164&h=164&fit=crop&auto=format`}
                        alt={img.original_filename}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};
