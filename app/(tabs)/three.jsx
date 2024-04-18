import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React, { useState } from "react";
import { MDBContainer , MDBCard ,MDBCardTitle , MDBCardBody , 
MDBCardFooter , MDBInput , MDBBtn , MDBTypography } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import {useAuth} from '../../components/context/AuthContext'

export default function TabTwoScreen() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  return (
    <MDBContainer>
      <View style={styles.container}>
        <Text style={styles.title}></Text>
          {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          {/* <EditScreenInfo path="app/(tabs)/three.jsx" /> */}
        </View>
          <MDBCard>
            <MDBCardTitle>
              <strong>
                 Login
              </strong>
            </MDBCardTitle>
                <MDBCardBody>
                    <form>
                        <MDBInput
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        label="Enter your Email"
                        size="lg"
                        required
                        />
                        <MDBInput
                        value={password} onChange={(e) => setEmail(e.target.value)}
                        type="password"
                        label="Enter your password"
                        size="lg"
                        required
                        className="mt-3"
                        />
                        <view>
                            <Link to = {'/forget-password'}>
                            </Link>
                        </view>
                    </form>
                </MDBCardBody>
            </MDBCard>
    </MDBContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
