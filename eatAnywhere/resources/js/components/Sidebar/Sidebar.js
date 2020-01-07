import React, {useState} from 'react';
import Profile from '../Profile/Profile';
import ProfileCard from '../Profile/ProfileCard';
import RestaurantCard from '../Restaurant/RestaurantCard';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const Sidebar = props => {
    
  const { executeScroll, user, setUser } = props
  const [activeTab, setActiveTab] = useState('0');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

return (
    <div className="sidebar">
            
        <Profile
        user={props.user}
        />
        

        
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '0' })}
            onClick={() => { toggle('0'); }}
          >
            Dishes for you
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Your uploads
          </NavLink>
        </NavItem>
      </Nav>
     
      <TabContent activeTab={activeTab}>
        <TabPane tabId="0">
          
          <RestaurantCard {...props}
              handleRestCoords={props.setRestCoords}
              setRestaurantId={props.setRestaurantId}
              user={user}
              setUser={setUser}
              setDishId={props.setDishId}
              setScrollTo={props.setScrollTo}
              setRestaurantsPosition={props.setRestaurantsPosition}
              />            
        </TabPane>
        <TabPane tabId="1">
              <ProfileCard {...props}
                  user={props.user}
                              />         
        </TabPane>                    
        </TabContent>                    
                            
    </div>
)
}

export default Sidebar;


