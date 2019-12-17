import React, {Component} from 'react';

import maksym from '../../assets/images/maksyim.png';
import chalap from '../../assets/images/chalap.png';
import aralash from '../../assets/images/aralash.png';
import bozo2 from '../../assets/images/bozo2.jpg';
import bozo from '../../assets/images/bozo.jpg';
import zharma from '../../assets/images/zharma.png';
import ysykAta from '../../assets/images/ysyk-ata-glass.jpg';
import legend from '../../assets/images/legend.jpg';
import kurut from '../../assets/images/kurut_classic.jpg';
import arashan from '../../assets/images/arashan.jpg';

import descriptions from "../../assets/descriptions";

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";


class Products extends Component {
  state = {
    items: [{name: 'MAKSYM SHORO', img: maksym, desc: descriptions.maksym},
      {name: 'CHALAP SHORO', img: chalap, desc: descriptions.chalap},
      {name: 'BOZO SHORO', img: bozo, desc: descriptions.bozo},
      {name: 'ZHARMA SHORO', img: zharma, desc: descriptions.zharma},
      {name: 'BOZO Buckthorn', img: bozo2, desc: descriptions.bozo2},
      {name: 'BOZO', img: bozo2, desc: descriptions.bozo2},
      {name: 'ARALASH SHORO',img: aralash, desc: descriptions.aralash},
      {name: 'ARASHAN WATER',img: arashan, desc: descriptions.arashan},
      {name: 'KURUT CLASSIC',img: kurut, desc: descriptions.kurutClassic},
      {name: 'YSYK ATA',img: ysykAta, desc: descriptions.ysykAya},
      {name: 'LEGEND',img: legend, desc: descriptions.legend},
    ]
  };

  render() {

    return (
        <Container  maxWidth="md">
        <Grid container spacing={4}>
          {this.state.items.map(item => (
              <Grid item key={item.name} xs={12} sm={6} md={4}>
                <Card style={{maxWidth: '250px', height: '100%',
                  display: 'flex',
                  flexDirection: 'column',}}>
                  <CardActionArea>
                    <div style={{ display:'flex', justifyContent:'center', padding: '20px'}}>
                      <CardMedia
                          component="img"
                          image={item.img}
                          title="Contemplative Reptile"
                          style={{width: '50px', height: '100px'}}
                      />
                    </div>

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
          ))}
        </Grid>
        </Container>
    )
  }
}
export default Products;