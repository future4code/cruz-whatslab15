import React from 'react';
import './App.css';
import styled from 'styled-components';


const AppContainer = styled.div `
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin:auto;
  display:flex;
  flex-direction:column;
  background-color: #ededed;
  overflow:auto;
  padding-top:70px;
  padding-bottom:30px;
  margin-bottom:20px;
`
const MsgContainer = styled.div `
  flex-grow:1;
  display: flex;
  flex-direction: column-reverse;
  
`
const ContactBalloon = styled.div `
background-color:#fff5e3;
align-self:flex-start;
font-size:1.8rem;
padding:8px;
border-radius: 10px;
margin-bottom:8px;
`
const ContactBalloonUser = styled.div `
background-color:#ffc969;
align-self: flex-end;
font-size:1.8rem;
padding:8px;
border-radius: 10px;
margin-bottom:8px;
`

const InputsContainer = styled.div`
width:100%;
position:fixed;
bottom:0;

`
const NameInput = styled.input`
  width: 120px;
  height: 5vh;
  bottom:0;
`
const MsgInput = styled.input`
  padding-top:0;
  width:400px;  
  height: 5vh;
`
const HeaderContainer = styled.header`
  display:flex;
  position:fixed;
  width: 600px;
  top:0;
  justify-content: center;
  align-items:center;
  height: 8vh;
  background-color: #ffa13d;
  box-shadow: 0px 5px 5px #d9c3ab;
  font-size: 1.7rem;
  color: white;
`
const ButtonSend = styled.button`
background-color:#ffa13d;
color: white;
font-size:1.5;
bottom:0;
width:65px;
height:6vh;

`
const TextChat = styled.p`
margin-top: 5px;
color:#363432;

`


class App extends React.Component  {
state = {
  
     messages: [],
     userValue:'',
     messageValue:''
    }

    onChangeUserValue = (event) => {
      this.setState({userValue: event.target.value})
     
    }
    onChangeMessageValue = (event) => {
      this.setState({messageValue: event.target.value})
    }

    sendMenssage = () => {
      const newMessage = {
        user:this.state.userValue,
        text: this.state.messageValue
      }
      console.log(newMessage)
      const newMessagesArray = [newMessage,...this.state.messages]
      
      this.setState({ messages: newMessagesArray, messageValue: ''})
      
    }


    onKeyPressEnter= (event) => {
          if(event.key === 'Enter'){
           console.log('enter press here! ')
          
            const newMessage = {
              user:this.state.userValue,
              text: this.state.messageValue
            }
            console.log(newMessage)
            const newMessagesArray = [newMessage,...this.state.messages]
            
            this.setState({ messages: newMessagesArray, messageValue: ''})
            
          }
      }
    
     
      

render() {
  return (
       <AppContainer>
       <HeaderContainer> 
       
         WhatsLab
       </HeaderContainer>
      <MsgContainer>
        {this.state.messages.map((message, index) =>{
           if (message.user === "eu" || message.user === "EU" || message.user === "Eu" || message.user === ""){
             return <ContactBalloonUser key={index} >
              <TextChat> {message.text}</TextChat>
            </ContactBalloonUser>
           } else{
            return <ContactBalloon key={index} >
            <strong>{message.user}</strong> <TextChat> {message.text}</TextChat>
            
          </ContactBalloon>
           }
           
           
        })}
      </MsgContainer>

     
      <InputsContainer>
      <NameInput onChange={this.onChangeUserValue} value={this.state.userValue} placeholder={'Nome'}/>
      <MsgInput onKeyDown={this.onKeyPressEnter}  onChange={this.onChangeMessageValue} value={this.state.messageValue} placeholder={'Mensagem'}/>
      <ButtonSend onClick={this.sendMenssage} >Enviar</ButtonSend>
      </InputsContainer>
      
     
    </AppContainer>
  );
  }
}

export default App;
