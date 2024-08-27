import { ImageList, ImageListItem } from "@mui/material";
import { itemData } from "src/data/data";

export const ImageGallery = () => {
    return (
        <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};