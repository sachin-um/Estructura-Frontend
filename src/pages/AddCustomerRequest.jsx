import { Container, Typography, TextField, Avatar, Grid, ButtonBase, Button, Box } from "@mui/material";
import { MdDescription, MdPictureAsPdf, MdInsertDriveFile } from "react-icons/md";
import TopBar from "../components/TopAppBar";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import "../assets/font.css"
import CloseIcon from "@mui/icons-material/Close";

const AddCustomerRequest = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const fileInputRef = useRef(null);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [uploadedDocuments, setUploadedDocuments] = useState([]);

    const handleCategoryClick = (categoryId) => {
        if (selectedCategories.includes(categoryId)){
            setSelectedCategories(selectedCategories.filter((item) => item !== categoryId));
        }else{
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    }

    const handleUploadClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const files = event.target.files;
        const filesArray = Array.from(files);
        const imagesArray = filesArray.filter(file => file.type.includes("image"));
        const documentsArray = filesArray.filter(file => !file.type.includes("image"));

        setUploadedImages((prevImages) => [...prevImages, ...imagesArray]);
        setUploadedDocuments((prevDocuments) => [...prevDocuments, ...documentsArray]);
    }

    const handleRemoveImage = (index) => {
        setUploadedImages ((prevImages) => prevImages.filter((_, i) => i !== index));
    }

    const handleRemoveDocument = (index) => {
        setUploadedDocuments((prevDocuments) => prevDocuments.filter((_, i) => i !== index));
    }

    const isCategorySelected = (categoryId) => selectedCategories.includes(categoryId);

    const categoryList = [
        {
            imageSrc: "https://designeverest.com/wp-content/uploads/2023/01/what-is-the-role-of-an-architect-in-building-a-house-1629876140.jpg",
            text: "Architects",
            id: "Architect",
        },
        {
            imageSrc: "https://www.crystalconstruction.lk/wp-content/uploads/2023/05/The-Benefits-of-Hiring-a-Professional-Construction-Company-in-Sri-Lanka.png",
            text: "Construction Companies",
            id: "ConstructionCompanies",
        },
        {
            imageSrc: "https://www.myperfectresume.com/wp-content/uploads/2020/09/how-to-become-an-interior-designer.jpg",
            text: "Interior Designers",
            id: "InteriorDesigners",
        },
        {
            imageSrc: "https://design.asu.edu/sites/default/files/2022-07/landscape-drawing-pencil.jpg",
            text: "Landscape Architects",
            id: "LandscapeArchitects",
        },
        {
            imageSrc: "https://www.ibuildnew.com.au/blog/wp-content/uploads/2018/06/Builder-looking-up.png",
            text: "Home Builders",
            id: "HomeBuilders",
        },
        {
            imageSrc: "https://generisonline.com/wp-content/uploads/2022/05/The-difference-between-a-joiner-and-a-carpenter-1.jpg",
            text: "Carpenters",
            id: "Carpenters",
        },
        {
            imageSrc: "https://blog.renovationfind.com/wp-content/uploads/2019/01/Painter-in-Edmonton.jpg",
            text: "Painters",
            id: "Painters",
        },

    ]

    const retailItemList = [
        {
            imageSrc: "https://cdn-eu.dynamicyield.com/api/9877108/images/24d111bf06dd1__furniture.jpg",
            text: "Furniture",
            id: "Furniture",
        },
        {
            imageSrc: "https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "Hardware",
            id: "Hardware",
        },
        {
            imageSrc: "https://images.pexels.com/photos/11125357/pexels-photo-11125357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "Bathware",
            id: "Bathware",
        },
        {
            imageSrc: "https://peakproducts-canada.s3.ca-central-1.amazonaws.com/gardenware-banner-img-2.jpeg",
            text: "Gardenware",
            id: "Gardenware",
        },
        {
            imageSrc: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            text: "Lighting",
            id: "Lighting",
        },
    ]


    return (
        <>
        <TopBar />
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

            <Typography variant="h4" fontFamily="Poppins" color="#435834" sx={{ marginTop: 10, textAlign: "left" }}>
                Transform Your Vision into a Reality.
                <br />
                Discover Your Perfect Match.
            </Typography>

            <Typography fontFamily="Poppins" fontSize="1.2rem" sx={{ marginTop: 8, textAlign: "left"}}>
                Request Title
            </Typography>
            <TextField
                label="Your request in one sentence"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Typography fontFamily="Poppins" fontSize="1.2rem" sx={{ marginTop: 5, marginBottom: 3,TextAlign: "left"}}>
                What category/s of professional/s are you looking for?
            </Typography>

            <Grid container spacing={9} >
                {categoryList.map((categoryItem) => (
                    <Grid item key={categoryItem.id}>
                    <ButtonBase
                        onClick={() => handleCategoryClick(categoryItem.id)}
                        style={{
                            cursor: "pointer",
                            width: "100px",
                            height: "160px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            border: isCategorySelected(categoryItem.id) ? "2px solid green" : "none",
                            padding: "4px",
                            backgroundColor: "transparent",
                            boxSizing: "border-box",
                        }}
                    >
                        <Avatar alt={categoryItem.text} src={categoryItem.imageSrc} sx={{ width: 90, height: 90 }} />
                        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>{categoryItem.text}</Typography>
                    </ButtonBase>
                </Grid>
            ))}
        </Grid>

        <Typography fontFamily="Poppins" fontSize="1.2rem" sx={{ marginTop: 5, marginBottom: 3,TextAlign: "left"}}>
            What type/s of retail item/s are you looking for?
        </Typography>

        <Grid container spacing={10}>
            {retailItemList.map((item) => (
                <Grid item key={item.id}>
                    <ButtonBase
                        onClick={() => handleCategoryClick(item.id)}
                        style={{
                            cursor: "pointer",
                            width: "100px",
                            height: "160px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            border: isCategorySelected(item.id) ? "2px solid green" : "none",
                            padding: "4px",
                            backgroundColor: "transparent",
                            boxSizing: "border-box",
                        }}
                    >
                        <Avatar alt={item.text} src={item.imageSrc} sx={{ width: 90, height: 90}}/>
                        <Typography variant="body2" align="center" sx={{ marginTop: 2}}>
                            {item.text}
                        </Typography>
                    </ButtonBase>
                </Grid>
            ))}
        </Grid>

        <Typography fontFamily="Poppins" fontSize="1.2rem" sx={{ marginTop: 5, marginBottom: 1,TextAlign: "left"}}>
            Describe what you have in mind
        </Typography>

        <TextField
            label="Your description"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={6}
            sx={{ width: "50%" }}
        />

        <Typography fontFamily="Poppins" fontSize="1.2rem" sx={{ marginBottom: 1, marginTop: 4 }}>
            Not sure how to express the idea in your head?  Visualize it into an image.
        </Typography>
        <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, ml: 30, width: "180px", height: "40px" }}
        >
            Generate AI Image
        </Button>

        <Typography fontFamily="Poppins" fontSize="1.2rem" sx={{ marginBottom: 3, marginTop: 6 }}>
            Enter a price range that you are comfortable with
        </Typography>
        <Grid container spacing={10} alignItems="center">
            <Grid item>
                <Typography variant="body2">
                    Min
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    sx={{ width: "150px" }}
                />
            </Grid>
            <Grid item>
                <Typography variant="body2">
                    Max
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    sx={{ width: "150px" }}
                />
            </Grid>
        </Grid>

        <Typography fontFamily="Poppins" fontSize="1.2rem" sx={{ marginBottom: 3, marginTop: 6 }}>
            Do you have any sketches that you want to share with us?
        </Typography>
        <Box
            onClick={handleUploadClick}
            sx={{
                border: "2px dashed #bdbdbd",
                borderRadius: "8px",
                padding: "20px",
                cursor: "pointer",
                marginTop: "20px"
            }}
        >
            <Typography variant="body1" fontFamily="Poppins" color="textSecondary">
                Click here to upload images
            </Typography>
            <input
                type="file"
                accept="image/*"
                multiple
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {uploadedImages.map((image, index) => (
                <div key={index} style={{ position: "relative" }}>
                    <img
                        src={URL.createObjectURL(image)}
                        alt={`Uploaded ${index}`}
                        style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px", margin: "5px" }}
                    />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        padding: 0,
                        background: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage(index);
                    }}
                >
                    <CloseIcon fontSize="small" style={{ color: "red"}} />
                </div>
            </div>
            ))}
            </div>
        </Box>

        <Box
            onClick={handleUploadClick}
            sx={{
                border: "2px dashed #bdbdbd",
                borderRadius: "8px",
                padding: "20px",
                cursor: "pointer",
                marginTop: "20px"
            }}
        >
            <Typography variant="body1" fontFamily="Poppins" color="textSecondary">
                Click here to upload documents
            </Typography>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                multiple
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {uploadedDocuments.map((document, index) => (
                    <div key={index} style={{ position: "relative" }}>
                        {document.type.includes("pdf") ? (
                            <MdPictureAsPdf size={40} />
                        ) : document.type.includes("word") || document.type.includes("document") ? (
                            <MdDescription size={40} />
                        ) : (
                            <MdInsertDriveFile size ={40} />
                        )}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                padding: 0,
                                background: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: 'center',
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                background: "rgba(0, 0, 0, 0.5)",
                            }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveDocument(index);
                    }}
                >
                    <CloseIcon fontSize="small" style={{ color: "red"}} />
                </div>
            </div>
            ))}
        </div>
        </Box>

        <Button
            variant="contained"
            color="primary"
            sx={{ ml: 60, marginBottom: "30px", marginTop: "30px" }}
        >
            Send Request
        </Button>

    </Container>
    <Footer />
    </>
    );
};

export default AddCustomerRequest;