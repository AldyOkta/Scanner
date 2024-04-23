import { View, Text } from 'react-native'
import React,{useState} from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera} from 'react-native-camera';

const App = () => {
  const [data, Setdata] = useState('scan something')
  return(
      <QRCodeScanner
        onRead={({data}) => Setdata(data)}
        reactivate={true}
        reactivateTimeout={500}
        showMarker={true}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text >
            This is a QR Scanner
          </Text>
        }
        bottomContent={
          <View>
            <Text>
              {data}
            </Text>
          </View>
        }
      />
  )
}

export default App