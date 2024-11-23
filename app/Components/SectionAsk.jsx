"use client"
import Accordion from "../Components/Accordion"
const SectionAsk = ({ data }) => {

    return (
        <div   className=" w-full  pt-8">

                {data?.map((faq, index) => (
                    <Accordion key={index} question={faq.question} answer={faq.answer} />
                ))} 
                <br />
        </div >
    )
}

export default SectionAsk