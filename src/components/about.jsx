import React from 'react'

export default function About() {
    return (
        <>
            
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h2>About TextUtils</h2>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        A text utility is a website or software that provides tools and functions to help users format and manipulate text in various ways.Text utilities are useful for a wide range of purposes, from checking spelling and grammar to converting text between different formats.A text utility can save a lot of time and effort for anyone who works with text regularly, such as writers, editors, and marketers.Some common text utility features include search and replace, word counting, text formatting, and text analysis tools.By providing a range of useful text tools in one place, a text utility can help users streamline their workflows and be more productive.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About The Developer
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        I'm excited to present my first project in React JS - a text utility website that I built to help people work with text more efficiently.As my first project in React JS, this text utility website represents a major accomplishment in my journey to become a skilled front-end developer.I'm proud to share my first React JS project with you - a text utility website that provides a range of useful tools for manipulating and analyzing text.This website is the culmination of my hard work and dedication to learning React JS, and I'm thrilled to be able to offer it as a valuable resource for users. <br /><br /> -<b>Apil Basnet</b>
                        </div>
                    </div>
                </div>
                
            </div>

            
        </>
    )
}
