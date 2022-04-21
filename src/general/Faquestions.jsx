import React from 'react'
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar,Accordion,Container} from 'react-bootstrap'

const Faquestions = () => {
    const {t} = useTranslation(["questions"])
  return (
    <div  style={{margin: '3rem 0 0'}} className="container ">
        
    <Container  className="justify-content-md-center">
         <h3 className="text-center">FAQs</h3>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{t("question_one")}</Accordion.Header>
                <Accordion.Body>
                 <p>{t("response_one_q1")}</p>
                 <p>{t("response_two_q1")}</p>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>{t("question_two")}</Accordion.Header>
                <Accordion.Body>
                <p>{t("response_two")}</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>{t("question_three")}</Accordion.Header>
                <Accordion.Body>
                <p>{t("response_three")}</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>{t("question_four")}</Accordion.Header>
                <Accordion.Body>
                <p>{t("response_four")}</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>{t("question_five")}</Accordion.Header>
                <Accordion.Body>
                <p>{t("response_five")}</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
  
    </div>
  )
}

export default Faquestions