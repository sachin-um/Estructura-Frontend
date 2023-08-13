import TopBar from "../components/CusTopBar";
import Footer from "../components/Footer";
import { Typography, Divider, Box } from "@mui/material";
import { useState } from "react";

const professionalCategoryImages =[
    { id: "architect", imageURL: "https://designeverest.com/wp-content/uploads/2023/01/what-is-the-role-of-an-architect-in-building-a-house-1629876140.jpg" },
    { id: "Construction Companies", imageURL: "https://www.crystalconstruction.lk/wp-content/uploads/2023/05/The-Benefits-of-Hiring-a-Professional-Construction-Company-in-Sri-Lanka.png" },
    { id: "Interior Designers", imageURL: "https://www.myperfectresume.com/wp-content/uploads/2020/09/how-to-become-an-interior-designer.jpg" },
    { id: "Landscape Architects", imageURL: "https://design.asu.edu/sites/default/files/2022-07/landscape-drawing-pencil.jpg" },
    { id: "Home Builders", imageURL: "https://www.ibuildnew.com.au/blog/wp-content/uploads/2018/06/Builder-looking-up.png" },
    { id: "Carpenters", imageURL: "https://generisonline.com/wp-content/uploads/2022/05/The-difference-between-a-joiner-and-a-carpenter-1.jpg" },
    { id: "Painters", imageURL:"https://blog.renovationfind.com/wp-content/uploads/2019/01/Painter-in-Edmonton.jpg" },
]

const retailItemImages =[
    { id: "furniture", imageURL: "https://cdn-eu.dynamicyield.com/api/9877108/images/24d111bf06dd1__furniture.jpg" },
    { id: "hardware", imageURL: "https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "bathware", imageURL: "https://images.pexels.com/photos/11125357/pexels-photo-11125357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: "gardenware", imageURL: "https://peakproducts-canada.s3.ca-central-1.amazonaws.com/gardenware-banner-img-2.jpeg" },
    { id: "lighting", imageURL: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
]

const CustomerRequestDetails = () => {
    const [hoveredProfessional, setHoveredProfessional] = useState(null);
    const [hoveredRetailItem, setHoveredRetailItem] = useState(null);

    const handleProfessionalMouseEnter = (categoryId) => {
        setHoveredProfessional(categoryId);
    }

    const handleProfessionalMouseLeave = () => {
        setHoveredProfessional(null);
    }

    const handleRetailItemMouseEnter = (categoryId) => {
        setHoveredRetailItem(categoryId);
    }

    const handleRetailItemMouseLeave = () => {
        setHoveredRetailItem(null);
    }
    
    return(
        <>
        <TopBar />
        <Typography variant="h4" fontFamily="Poppins" color="#435834" sx={{ marginTop: 5, textAlign: "left", marginLeft: "20px" }}>
            Request Title
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <Typography variant="h6" fontFamily="Poppins" sx={{ marginLeft: "90px", marginTop: "50px"}}>
            <Box 
                onMouseEnter={() => handleProfessionalMouseEnter("architect")}
                onMouseLeave={handleProfessionalMouseLeave}
                sx={{ display: "flex", alignItems: "center" }}
            >
                Category/s of professionals:
                {hoveredProfessional === "architect" && (
                    <Typography variant="body1" sx={{ marginRight: "5px", marginLeft: "10px" }}>
                        Architects
                    </Typography>
                )}
                <img
                    src={professionalCategoryImages.find((category) => category.id === "architect")?.imageURL}
                    alt="Category"
                    style={{ width: "80px", height: "80px", borderRadius: "50%", marginLeft: "10px", cursor: "pointer"}}
                />
            </Box>
        </Typography>

        <Typography variant="h6" fontFamily="Poppins" sx={{ marginLeft: "90px", marginTop: "50px"}}>
            <Box
                onMouseEnter={() => handleRetailItemMouseEnter("furniture")}
                onMouseLeave={handleRetailItemMouseLeave}
                sx={{ display: "flex", alignItems: 'center' }}
            >
                Type/s of retail item/s looking for:
                {hoveredRetailItem === "furniture" && (
                    <Typography variant="body1" sx={{ marginRight: "5px", marginLeft: "10px" }}>
                        Furniture
                    </Typography>
                )}
                <img 
                        src={retailItemImages.find((category) => category.id === "furniture")?.imageURL}
                        alt="Category"
                        style={{ width: "80px", height:"80px", borderRadius: "50%", marginLeft: "10px", cursor:"pointer" }}
                    />
            </Box>
            
        </Typography>

        <Typography variant="h6" fontFamily="Poppins" sx={{ marginLeft: "90px", marginTop: "50px"}}>
            Description of the idea:
        </Typography>
    <Footer />
    </>
    )
}

export default CustomerRequestDetails;