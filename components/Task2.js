
import { useState } from "react";
import { motion } from "framer-motion";

const ANIMATION_DETAILS = {
  size: {
    start: [50, 50],
    end: [200, 400],
  },
  duration: "2", // in seconds
};

export default function Task2(props) {
   const [isEndBox1, setIsEndBox1] = useState(false);
   const [isEndBox2, setIsEndBox2] = useState(false);
 
   const {
     size: { start, end },
     duration,
   } = ANIMATION_DETAILS;
 
   const callback = (e) => {
     if (e?.target?.id === "box-1") {
       setIsEndBox1(!isEndBox1);
     }
     if (e?.target?.id === "box-2") {
       setIsEndBox2(!isEndBox2);
     }
   };
 
   return (
     <div
       style={{
         display: "flex",
         flexDirection: "row"
       }}
     >
       <motion.div
         id="box-1"
         style={{
           backgroundColor: "gray",
           padding: "8px",
           color: 'white'
         }}
         animate={{
           height: isEndBox1 ? end[1] : start[1],
           width: isEndBox1 ? end[0] : start[0],
         }}
         transition={{ duration: duration }}
         onClick={(e) => {
           callback(e);
         }}
       >
         Box 1
       </motion.div>
       <motion.div
         id="box-2"
         style={{
           backgroundColor: "gray",
           padding: "8px",
           color: 'white'
         }}
         animate={{
           height: isEndBox2 ? Math.random() * 100 : Math.random() * 100,
           width: isEndBox2 ? Math.random() * 100 : Math.random() * 100,
         }}
         transition={{ duration: Math.random() * 3 }}
         onClick={(e) => {
           callback(e);
         }}
       >
         Box 2
       </motion.div>
     </div>
   );
 }