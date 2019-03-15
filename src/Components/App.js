import React from 'react';

import Form from './Form';
import PetsList from './PetsList';
import Settings from './Settings';

class App extends React.Component {
    constructor(props) {
      super(props);
  
      // стейт по умолчанию (инициализация)
      this.state = {
        arr: [    
            {   
                name:'Airedale Terrier', 
                owner:'Jane', 
                description:'Airedale Terriers have served in the British military, the German police force, and the American White House. Perhaps best known as strong, brave, and energetic terriers, Airedales are the largest of the group. This dog loves to rise to every challenge, both physically and mentally, perhaps in part because of originally being bred as hunting companions. President Teddy Roosevelt claimed that an Airedale Terrier can “do anything any other dog can do, and then lick the other dog, if he has to.” The Duke himself, John Wayne, apparently borrowed the nickname from his childhood Airedale, Little Duke. Alert, eager, and very active, an Airedale Terrier is up for anything life brings its way.',
                date:'2018-06-22' ,
                time :'15:50'
            },
            { 
                name:'Dalmatian', 
                owner:'David', 
                description:'Dalmatians were bred to run along horse-drawn carriages to keep the road clear; later, they did the same for horse-drawn fire engines. Dalmations and fire fighters have been together ever since.',
                date:'2018-06-22' ,
                time :'15:50'
            },
            { 
                name:'Staffordshire Bull Terrier', 
                owner:'Bert', 
                description:'You might not expect a dog originally bred for fighting to be so wonderful with kids, but the Staffordshire Bull Terrier really is. Known to their fans as “Staffords” and “Staffies,” this breed is known to Brits as the Nanny Dog, for her gentle, loving manner toward children. While all dogs should be supervised with children and every dog is an individual, this breed is often eager to assume the role of nursemaid and loves her family deeply. Unfortunately, this breed has become a target of breed-specific legislation in some areas and acquiring home insurance may be more expensive for their families', 
                date:'2018-06-22' ,
                time :'15:50'
            },
            { 
                name:'Siberian Husky', 
                owner:'Leo', 
                description:'Huskies are known for a few other distinctive characteristics as well. They\'re notorious howlers — you can hear a Husky\'s voice carry for miles. And these dogs often have striking blue eyes', 
                date:'2018-06-22' ,
                time :'15:50'
            }                                          
        ],
        name: "",
        owner: "",
        description:"",
        date:"",
        time:"",
        search: "",
        order: ""
      }
     
    
    // биндим все наши методы
    this.handleSubmit   = this.handleSubmit.bind(this);
    this.handleInput    = this.handleInput.bind(this);
    this.handleDelete   = this.handleDelete.bind(this);
  }

    handleSubmit(e) {
        e.preventDefault();
        
        const {        
            name,
            owner,
            description,
            date,
            time,
            arr 
        } = this.state;    
    
        const newDog = { 
            name:name,
            owner:owner,
            description:description,
            date:date,
            time:time
        };
    
        const copyArr = [...arr];
        copyArr.push(newDog);
        
        this.setState(
            { 
                arr: copyArr,             
                name:"",
                owner:"",
                description:"",
                date:"",
                time:""    
            }
        ); 
    }

  handleInput(e) {
    const { name, value } = e.target;
     this.setState( { [name]: value } ); 
  }

    handleDelete(index) {
        const { arr } = this.state;
        const copyArr = [...arr];
        
        copyArr.splice(index,1);
        this.setState( { arr: copyArr } );
  }

    render(){ 
        console.log(this.state);
        
        const {               
            name,
            owner,
            description,
            date,
            time,
            arr, 
            search, 
            order 
        } = this.state;

        let copyArr = [...arr];

        if (search) {
          copyArr = copyArr.filter(dog => {
            return dog.name.toLowerCase().includes(search.toLowerCase());
          });
        }
    
        if (order) {
          switch (order) {
            case "az":
              copyArr.sort((a, b) => {
                return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1;
              });
              break;
            case "za":
              copyArr.sort((a, b) => {
                return (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1;
              });
              break;
          }
        }
    
        return (
            <div>            
                <Form 
                    name={name}
                    owner={owner}
                    description={description}
                    date={date}
                    time={time}
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit} 
                />
                <Settings 
                        
                    search={search} 
                    handleInput={this.handleInput} 
                />
                <PetsList 
                    arr={copyArr} 
                    handleDelete={this.handleDelete} 
                />        
            </div>
        )
    }  
}

export default App;