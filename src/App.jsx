import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} /> ;
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
// import PostDetails from "./components/PostDetails"; // Import the PostDetails component

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route index element={<Homepage />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/details/:id" element={<PostDetails />} />{" "}
//         {/* Add the route for PostDetails */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
