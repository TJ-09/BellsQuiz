import NavBar from "../../../components/NavBar/NavBar";
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import QuestionComp from "../../../components/QuestionComp";

const Question = ({ questions, id, catName, catDescr }) => {
    const [questionSession, setQuestionSession] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(<p>Loading question...</p>)

    // console.log(questions.data[0].attributes);

    const changeQuestion = () => {
        setQuestionSession(questionSession + 1);
        setCurrentQuestion(<QuestionComp
            catName={catName}
            // questionText={'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.'}
            questionText={questions.data[questionSession].attributes.questionText}
            answers={questions.data[questionSession].attributes.answers}
            button={changeQuestion}
            submitButton={selectAnswer}
        />
        )
    }

    const selectAnswer = (id) => {
        console.log("Pressed")
        console.log(id);
    }

    return (
        <>
            <NavBar />
            <button onClick={changeQuestion} className={` ${questionSession === 0 ? "block" : "hidden"} flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg`}>Begin Quiz</button>
            {currentQuestion}
        </>

    );
}








// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get skills
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/categories/');
    const categories = await res.data
    // Get the paths we want to pre-render based on posts
    const paths = categories.data.map((el) => ({
        params: { id: el.id.toString() },
    }))
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // console.log(params);
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/categories/' + params.id + '?populate[questions][populate]=*');
    const questions = await response.data.data.attributes.questions;
    const catName = await response.data.data.attributes.categoryName;
    const catDescr = await response.data.data.attributes.catDescription;

    const id = params.id

    // will receive `x` as a prop at build time
    return {
        props: {
            questions,
            id,
            catName,
            catDescr
        }
    }
}

export default Question;