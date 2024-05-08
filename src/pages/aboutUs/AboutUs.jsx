import styled from "./aboutus.module.css";
import Navbar from '../../Components/Navbar/Navbar'
import company from '../../assest/images/about.png'
import Footer from "../../Components/Footer/Footer";
function AboutUs() {
  return (
    <div className={styled.aboutPage}>
       <Navbar title="MY BLOG" />
      <div className="container">
          
              <h2>AboutUs</h2>
              <h5>Companies that use React</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla perferendis illo qui quo obcaecati officiis corrupti fugiat hic voluptates inventore? Cupiditate, ducimus odio. Corrupti doloribus iusto quasi minus repudiandae est?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat, illum, asperiores necessitatibus iste, ut in recusandae saepe facere consequuntur ex velit. Ea sapiente tempore, optio obcaecati animi praesentium consequuntur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum libero iusto, suscipit possimus dolorum pariatur officia adipisci repellat! Qui, aliquam quod quam voluptas in vel reiciendis laboriosam fugit. Tempore, est!
              Inventore distinctio facere eum qui dolores officia doloremque ab quis explicabo nostrum.</p>
              <img  src={company} alt="" />
             
          
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
