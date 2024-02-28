import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';


const useLocalStorageLike = (key) => {
  const [likeCount, setLikeCount] = useState(() => {
    const storedCount = localStorage.getItem(key);
    return storedCount ? parseInt(storedCount) : 0;
  });

  const handleLikeClick = () => {
    const newCount = likeCount + 1;
    setLikeCount(newCount);
    localStorage.setItem(key, newCount);
  };

  return [likeCount, handleLikeClick];
};


export default function MultiActionAreaCard() {

  const [likeCount1, handleLikeClick1] = useLocalStorageLike('likeCount1');
  const [likeCount2, handleLikeClick2] = useLocalStorageLike('likeCount2');
  const [likeCount3, handleLikeClick3] = useLocalStorageLike('likeCount3');
  const [likeCount4, handleLikeClick4] = useLocalStorageLike('likeCount4');
  const [likeCount5, handleLikeClick5] = useLocalStorageLike('likeCount5');
  const [likeCount6, handleLikeClick6] = useLocalStorageLike('likeCount6');


  return (
    <>
    <div className="card-containerhome">
    <div className="cardhome">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.luvele.com.au/cdn/shop/articles/fererro_slice_03b_874f5bac-8ce4-4124-bae8-cbb30a775046_1600x.png?v=1592893546"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hazelnut Cheesecake
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Originating from Italy, hazelnut cheesecake blends creamy textures with nutty hazelnut flavor. This delectable dessert harmonizes velvety richness with earthy essence,making it a irresistible combination.</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         <Button size="large" color="primary" onClick={handleLikeClick1} hover={"background-colour"}>
          ❤️ {likeCount1}
        </Button>
      </CardActions>
    </Card></div>
    <div className="cardhome">
<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/11/9/0/FNK_Classic-Tarte-Tatin_s4x3.jpg.rend.hgtvcom.616.462.suffix/1510259143954.jpeg"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Tarte Tatin
    </Typography>
    <Typography variant="body2" color="text.secondary">
    A French delicacy, showcases caramelized apples atop flaky pastry. Baked upside-down, it's revered for its sweet-tart flavor balance. Served warm, it's a timeless dessert, often paired with cream or ice cream.    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
<Button size="large" color="primary" onClick={handleLikeClick2}>
          ❤️ {likeCount2}
        </Button>
</CardActions>
</Card></div>
<div className="cardhome">
<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSPM2KCK0dB-l4z9wJ7qjZ3JQOzEktPI39w&usqp=CAU"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Churros
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Churros are a beloved Spanish dessert consisting of fried dough, often dusted with cinnamon sugar. Crispy on the outside and soft on the inside, they're typically served hot and accompanied by a rich chocolate dipping sauce.    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
<Button size="large" color="primary" onClick={handleLikeClick3}>
          ❤️ {likeCount3}
        </Button>
</CardActions>
</Card></div>


<div className="cardhome">
<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image="https://mojo.generalmills.com/api/public/content/T87Gl18jr025Zu32OG94GQ_gmi_hi_res_jpeg.jpeg?v=b2680bba&t=466b54bb264e48b199fc8e83ef1136b4"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Apple Pie
    </Typography>
    <Typography variant="body2" color="text.secondary">    
Apple pie is a quintessential American dessert featuring a flaky crust filled with sweet, tender apples, often flavored with cinnamon and sugar. Baked until golden brown, it's a comforting treat enjoyed year-round.</Typography>
  </CardContent>
</CardActionArea>
<CardActions>
<Button size="large" color="primary" onClick={handleLikeClick4}>
          ❤️ {likeCount4}
        </Button>
</CardActions>
</Card></div>

<div className="cardhome">
<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwU5SWjXsqWoXBDLrCqk91FbRHwyTU-BU1w&usqp=CAU"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Linzer Cookies
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Traditional Austrian treats characterized by their sandwich-style construction with a fruity jam filling. These delicate, buttery cookies often feature a lattice design on top and are dusted with powdered sugar for a delightful finish.</Typography>
  </CardContent>
</CardActionArea>
<CardActions>
<Button size="large" color="primary" onClick={handleLikeClick5}>
          ❤️ {likeCount5}
        </Button>
</CardActions>
</Card>
</div>

<div className="cardhome">

<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgVFRUYGRgZGhobGhoZGxsbHB0aGhoaGhgbGxsbIS0kGyIqHxgbJjclLC4xNDU0GiM6PzozPi0zNDEBCwsLEA8QHRISHTMqJCo2MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIAMkA+gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcBAAj/xABCEAACAQMDAgQDBAgFAgYDAQABAhEAAyEEEjEFQQYiUWETcYEykaGxBxQjQlLB0fAVM2Jy4RbxQ1OSk6LSZIKyF//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACURAAICAgICAwEBAAMAAAAAAAABAhEDIRIxE0EEUWEiMhRxof/aAAwDAQACEQMRAD8AzWvAV6u1jHRSqStKrGPRSgK8K6KxjoFKpIpVYx0UqkilCsYUK8K8aQXNYw8K7SLbTS6xhBc0/bbFMMKctmgGx6lUjdSGuiiAfroYVU6nWxxUI69qwaCQOPWlgUNW9e01d6LWhhml5UMoWd0/+Y49kP4GpRaoiH9o/uqfhuFc1Dt2oRegzW0TVzTgFRNG5709d1CryadMRokIhJAAkkgAepOAKbuPtJB5BgjuCOQahprdx8pg9iOx7Gr/AK9oR8X4owl9VvL6Avl1+j7x91JOaQ8MbYM6+6TVULJJmiC9YWaSunAqLyF442iJZBAp/Y1SFWKVNLY/EHK7XBXa6zhOrSq4K7WMdWu1xa6tYwqlUmuisY6KXSKVWMKBrxWuClVjHkxXZrlerGEMxpxGpJFJc0Aj26mbtwVxK5dtzRAMLbDUptAIpSWiKe3VNp2V5Kitu6cLXtK5BxT2qmmdDhs0WtAjLZa23Icn1T8mH9afS8DzTLESD/ocfc1s/wA64CKEENkfRYbwBNDnUNUS0A1Y6nUDbzVA5kmqEmPabUFGmtH8O3jrdK2l/wDGtbrun/1Kf820PnG4e/sDWY0QdA1ToysjFWVgykdiODU5pdlINtUWO6DmfeefqO1PDiiXW6FOo221WmULqFzqNOOWP/mWx3n07/7uRG5f2gzgiQR3kcg+hqDidEZ2OXLgFRv1qq3V6/0qv/XDTKDFlk2TBXhXq6BXScgqvV6rvw50A6pj5wiKRJ759K1hSbdIphXRWlP4F09tN5ZmA5zmPpVRqb3SrRINskj1nkUvJD+OQG12it+udOZY+BBHAC5NWvh29pdRc+CNGygiSWSPzFDmg+JgAKWykciPnituToWmtgEWlxxgVTda1Fu22dMXJ4hJ/lRckgLG2ZUa9NaBe63buQn6hcwI/wAs4P3U307U29+27oXRSPKTbMc/KhyD4mAs1wmtp1HhLSOgIRUn2qj6v4dsWF3hAwHOKEp8fQYYeXszLdSTmizX6ywBCaZiT/oP9KYs9WNtYOjeP9h/pSeb8Kf8b9QNKD2BpZRv4W+41pXQdQtxA4tBZ7ERFTdYA/CLI4xSy+RFDR+I37MnFtzgKxPyNONob3/lP91Gdwapmb4Vj7Pcxn5V1OndUuAn4SL/ALmA/IGss0n0jP48V2wJHTLzGBbaflXf8A1M/wCU34VpnQ+h6wEnUFBjG0zHzwKKNP0dQpzJPLdqdTk/QjxQXsw//Dbo2W2WGd3VAeCWRY/FR99O/wDSesmNq/8Aq/4o28bdANp9O/xDsfUW7c8bN+5SwP4/Spmq6BasBvi69w0eQllH196Ccl6GcIOtmd6rwjq0IDBMjkN/xUP/AKR1uSLcgd55+VaZoOi2LhRjrnuRBORt/Ki7p/wC2xbgfaOMUykycscV9nzTdtshKuCrDBBqw0F4KM1tnifwtbvW322llv3sSD2IrDuq9Ouaa61q4IZfxB4NF70xa47RY6fr1yxcFy05R14Ye/IIOCD3BwaL06r03qw26kjR6wgD4y/5VxowWBMTjhoPYMay9pryITTKKQrk2wx67+jjqOn8wt/HTkPYl8diU+0MegI96GP8Lv8A/kXP/bf+lX/h/rmt0n+TqHRf4J3J6/YYED6RRX//AKb1H/8AH/8Abb/70OSDwYBiu16vU5M9Rx4Mt/siONzc+3FDvR+hXNR9nA9TRpoenGwgtEzHeoZ5VHR2fExvnbCRECIocl1bEf1qF1HpWmtM2o/V1faskRwfr3qFf1rraeBLAeUe44qb0U3Wsolxg7vLENiGiYE8x/KoY8qZ2ZMVAcPGdlGVhp1DKxxtH2T2+dXPhnxc9/UMqQi7ZPlBIAMVZa7wxp70s9pHdCNxDFV2lZknhsnj2p/w50LTWGZraAEL58gcnEE9hVX/ANnPX4qLjV3muEIjDaokksASO9DfiLxrc0zqBbVlBHvjvmifU6FFKbQrAnMwBtGcmgzxB4ks2bgf4IdgW2udpUg4I2xWcmnsHFNaRC1n6S2YH4ahfaB3qDf/AElagoFKqPeOR9asLnjPToEuLYQ7mUuvw1gRkgN3NI1fjrTNc+INIhI4kLG3v9aN37YEq+g+6HcuXtIly5JLgMAuNo9KgddS7bOEfb68j/ipfh7rzaqwb1tFRVbbtjiPlzzVt1PqG3TvcAkJ9qZnsYEj3oyimqsSM3F3Rlet8c7ZAtHcDHmEDHeoD+PLp/cH3UWN49tIzW7tlRtEBgoYnGCZFVt39ItoSq2bZPKsUH3MIqfjiyiySRI8J9f/AFy4bewrCSYED0oxsdEYiQCPnQda/STbUgraWZ2+UACSRkACtMuqzorbyu4DAE5PpRjhiwSzSiZ/4yXW6bYdOGcMDu2oSViqHp3WurONqad3LcFlKwPrFaN17W37NsujiVEMNu6THJ7Kazdf0j394icbge4O44MDiBTcVF0kBTk1baO2ej9YuD4m0qS+2HcA88wJxWr9OsXVtIjldwA3GeT7VkGs8aatAV2XEDwBvRlPPKsealdM8U6hLjvd2uUQuqFioXKiOTu54Geayko+guDkuwx/SUu/Q75+xdtN9zhT/wD1Q31/wbe+GZ1Vp0EEG5gj2majX/G/69Yv6W5bVXNtmtlSSCyefaQ0mTtxVt478P6jUWLVzTr8TeAWRY+ywBUyTGKLdvSEX8qmyD0zwIiW91zXcj/wo2CR3Jmrjwn021pXb9uLhYiGOMdhQVa8OdVd/wBXKlIQHzOqptAwJWZPtS28D9UBH2FAIG74whR6n2FBJ30M2vs2E6kllEpDZnsB2oU/SF4ds3rDuIa8gLI3BgZK4qZ0Dp1y1pUs6i4hbaZhxmGxk5j+tTrltSQuxAseZd0ggdgcEGmcheCZ85rZnFWel0QAk0ceLvCgRzqNPbi02SoMwe+OwoZUYouVk440iOUpEVIuGmKQrRb6Xwrcb7RirK34SQfaNECkmkXVb1rmfyZMdYYoa6Zb+FFtSAtEeo0K3LYdW3MBn3oWRNj7pJ9qsP8AET5QhAg1aMoyjspTVOPoavYBHevWNS6MGWJAMfdBqRfurcxsCuDkyIqEVIP9K4cmOcXa6OyE1PT7LfRdVARkb94DmTx6/QVKuuHVANolTxwQPUTk/wBKGnUzSlvMsQSD2g/360IZ5LUgywxu0Emkss1lm3qMctOThoE+o7jsaF+veHRqvhkXBbnMFN53HO1QCJEZHFTU6u6IqheJJ3c5Ej0AMEevFSun9WsW23EA+WDMZGdxHuSeT9K6oZI6OaeOWygP6LGBRXvvBAJIRQAe6iXkkY7U+P0W2wXLXrwRSAGItif4jycUYWOqm66KUbbgqocEQvc7hJaA3ygGrnU+faiFCrbRkluBuIgHIheT3NdcXGS0cMuUXTRT9A6Wml04s2g7Ku5t1wj7ZEyyjIyRGK5aZyII+IroWYbJBmJ3DnHAAzVxqEW3BVdzn7OUk92IUkCMZ9Jqo13XGUndCeb7AO4GYzuC5jMwff5iaS2wwk3pIFusJ0o3DcuWxuDbfh7rgdivIKRgZ/8AjUO9q+i7kZNLZIeSwcsoTA8vPJz254qn8T9O1WouI1m21xnDPFsM22WJgsQIgMMmqPV+H9cINzTXBnssye/2e+JNJG2rTHlxTpo0BNX0i3fVE09gllPnEMigkeWGP247wKN+geJrWq3i0JCY7TMkcdhEGfzrB28NazO6wywCYYopwAT5WYHgz759K1P9HvSrmksMt/arFxcgNugFUCSyEzmTA9vWnVp9iSUWug113ULYtvkyDBG2SSRMQfWha1410yXPhi1sRRBuFVVVMSFgct7D1qZ+sveEm45Kkn4YU2zwShgGSeMHHM8UN9T8JfEum813aHBNxEAIVhtBY72DA7RnBgjJ5rSk+0CEIrUjnV/0gb7cIqMZMkqSAvceYTMdxQB13qiXLr3EkB/3SAuIAiFwOO1GC+FtGCrXL7lDAAhEBJkCGG+RI7enNRW8MaBwAl68CTyWRgPTIT3n/vUXL7ZdR1/KAjo1mbqS5QMW8wUuQQPLCqQSSYH1ravCmsW1pbdo3lfaCF2naFE7lVd2H2ggZND3Suh9PsOrJca8ZjawDpKxk7VgRvEfMHNGAuIFACKob/UyzjHaWwKLn9C8NUzOfEni7V27r2nfY6EidolgxwQSP4SPvqo6l4zu3cMVIIXGxR5hHzJyPxrR9f8ABVHuXNOlydttnPw3KrJ2zuDQsn94VQdK8RaTT3HFvToCq7gRbtq8SNyr5QXJY8COPrWST7Gba/ygI1viG+yLOGBJ3AFZHoQMEZrdNKE/V1Itr9hbjEtsAZhJO/tAnPpQV1P9ILh2T4a7T9k8giSRO5AcqQpmOD8y30rx+Lupt2ijJbZ/sLG0LtIIY91JIJJ9D608aXRObk1sOF0wdPiKx3EHli9sATuggERz3rNeq+HXlrlplYEk+XKmcyp9K0a9rbzW2fT2kNsCQsFCwK4gHaAYgTOJHoarmDRuncuOdgJLgtuCrG4GZkTM+maE1W0CMm9Mx6+jIxVwQfQ0ma1LqHRrV4eZRPrVR/0Zb9T99KpjUWLXhGKi3rtQm1VNPfmuGi5IL13R6AG4ASQW9eKhC571Wva1IuD4VxlEEE9oOarjq9h5Ugtt37ds7DBydxGZ5il3+t2bNtC+2GBBG2cz5RPb50J9O0d1G3O+6Jgg5kzyDg88UQKllwjOAGUSd+bczAx2q8ZxbpMLtq2i00fTTqBvtRs7SwmYyoAzioOr0jW22usHnP8AftUy11M27iOVUrDAG2SEB7DcpyPWp3QeoPfdhdFllKACfKQ3BVdxJI949/allghP8YVmnDfaBi5gMPUcHInkY9ckfWmXtMThT3x9R2HAz+HtRTq+kaf+MW2P2QSXWR2J2/Lgz7VBbw/fUF9gcCWlWEDEEnd8pjOR7VF/HnH9Kr5EZfhSWzcSCGKmSZGG5AgHsP79alaLqVxCNrE8AZB4Mx+OfrSCFPJg4CqZAwG+13+q817Zk5BXjkEHgFv/AJcT6j0kJSiM1GXZKfrTttLjzKTBBMEQywRPnAzjIkZEmouv6y7W/IIbBbAg7VMeQCWlig+XrmmWtEEOZ9TuBH1I7QY47RUa4QpnMiZkADEEH17jkCPvqiyS6ZLxR7QQdJ1z2rSLc2LeXNyHJZgNxEuD5BlSV48pAAxNj/jiK2LaqY3DaIwAQxC+sHB/1A+kBBunfBOcg5gwN2JiTA+f5R0M08n+GVMCDPMk8AD6DvFVU2ReFGkHrFttyXdqny4PcmOIODDcdzHNRrK7ij/HBRWG2Q07QPLug84GBxJoDXUv7ny4ABmFIGcTyAD/ALskTNODqdwJG4kqOxYAQYmJjO4/h6UzyMTwr0aCl8nd8NszJIEvgyNgJMCMA+nMnmh8QdJvXFZkdldjtUtKglgAdx4jgSJB83vA9a6kUclZG0EY3ZIjmQIyADxOaXe6wWG51DOoi27cqWlG2wFJw4xIy2OwB5KS2bxNPRDveDtaqsHv2VKyShuOZaAYB2QTHoT371Vp4c1rCQEzA+2JInEAcjE/SrvVeIWwLbMjIyskKHHlLrG1mAyQIAziRkCkanqaorFiQ/CEckB9z7ySd6Mx4xyMia0nXSDCMm2mys0HQNal+zcuCFW5bJO9SQgIzt3boC8Y44rUBbt3Cxa56wIjHcGRP/aga54oDFiAwBCjdncuz0kEZMfgCea5b8akpsfdyxLQCSIG0bQQIMCQZ7wRJNL/AKezU0tBrq9MuottaXYu0FGZi5YhxPBgESRJMjn2rMb/AIP1wH2VKjBIdYUGBndEAkxjmDicVYWPF7qymWABgqIyIAJMAA5kx3iDyZbu+KWa2VDMpYNuMDkGUOCATxJI9eaZP82K4u+yA/gzWAAk2oPf4kwdu6GgGDFTekeE9Rav2rrtY223RzFwyQpk7QFkmB6fkYRofFDi0bbkklgdygLABB2T+6CSSSM8e9Qx4guK2WmGGe5UcjHyGY7DmtyZlBVdmwarqiFEtW38pCGds4D+aQSDlhEY7xS+sq4tsm/csL5tw3BweSJ3GWKCS2N3GKxq54jukMvIJJByCOAIM9gIz/Sn9B12424XLjQ23zbm3CMGAD3xPqQPStyaTsCxJyVM0+0SfmIkSDmPUE/nTu2gXo+uv2rd97dveUA2gkndmW2hTJ8pLCrKz44BUE6S5JAmIiYzFSVlZRp0UzPUfUXCBIppNUDStVqUVCSalxBYp9zbdh7ZqwsWGABNV/QdM7kXGkL2FEV60Qsiklp0WhG9kJOc1IOgVwROD2qGpfdnipVjVEGKVreh4uiO6NYZCLasgPHmB3epzn64rlvUrP7RWH+pBx81Jg/hRElxHWGFRNVoVOVj+VU5tdGcUyLY1bG4uVv7QrbSFYqPM32Tjd3254HNTLXim9uO8PbjhVWAEBxtkQgAjtJJiodroF5YuJbYRkFR25P0NRb7XkQJb2kBgWR5yIIOTOc88/XNdEcqX+rRCcL6phT0rq9tbbHUpbd5yP2YCgnzKcmSvJ5PMTxUzT6exktp3a4xlltlW2L9kHah8qmOCJiaz1GLkhkW2CSBsJ2qYwQvLCT2P5VIu6q3bE2tTe+zJ3hlBMRtYlpAgcn2FWjOMiEoNdWgn6z0QJsZLnmuPtRWUKQzDygAAwAQokx2zQ1qdHctqSyOPPggNyDtPmAgZJHPY9+YtnqKuwZ4vN9sBg+0sAVUwR5lGfLiSoOJz1/EDW4Fom2wRWBZSZWQVYDEif4vaOTSvHGTsdZJRVXYhgVgbSCQIUggjb5t2T39YB5964FnOdoZTnaMDIYYmQecYzIHFXGp1L3grXdWnmtgKrWwbm1sszEksvaAAJnJyWMu10uwSjXFADuom3cYgrG64wVQRsXYRJEk8QMtvF9My+RraBplLGCMAQZE7jlTImB39sMPU0gQSvyJkcc4nsBIbOBxRD0/pFu6zkjVLaVtu51Qh44OJ2qQGJd/3dgBJNMa7w/eDOAWUFhtN62VXO9lbcJA+yDAjsO0VvGzeeJSqYJEkeg4JJxOM87Vgxz6TCLsbTmeBiW5kTEf7T2yQTjBv73hTUbEdGtsXG/y3NqqQAwMlQM7t0SI9IzVBd0uo2/5JKt9ggqRjcTndny4HMxzmhwkN5Ysj3Hm4DJJk8fxMDyeCTPAE+8UvVZBwSTtHrGARtByBg8Y596jJcdGK3FKAsQxZ1SCI/e3cjcDg/ypWo1iljBkRumecknvxugcn09a1M3kiQwkKS2J7N7e3r86juBnP9PpS2ugmBLDiQMyAeSBAxBplroP9mtTA5IUF/nTZ/713f8A3/3/ACpDP8z9KNMVyR6fWvNnv/Oki5SviCK1MXkjwrwriZIAEntA+f1pQM+XvJ/lieO1Gg39Bt4Q6gT+zgMRLLJgnBAAPBMTzg+2K0mwnlWWJMCTtXJjNYf0p79q4rJbclpC+UmexgRk57cVpOl193Yn7Jvsr3X0HtUZFdszbfApWgt/GuqrcDMUzcurE1F0Wu+HcVhxOfkaKg2nQjkk0aOqhUhewxT3TH+JbycyfzqAusX4ZecRUfwlrA9u4TOGaI+c/lXNVqzq5K0Xj6BihcIxUctBgfWq9kg45qL4h8X3Ldr4CN5c4AEkEzBPMTQm2v1bBHWfMcen19KpHFaTRN5KbT/8C6492cEgVc9FF1yAi7uxkY+tMaLXsu03NOjbW3P5pXYyAKoMZyCeK0hLKIu1FCgcACKeGG32Ty5uPoXp02oqzwoH3CKq+odHt3PtID79/wAKnbo5NMvrBwM11vjVM4VKSdoD+peGVyVubfZs5qgfod6SBbLbRJK8QcE5o91/nHFI0GjYmAxUVzuEW9I6I5pLszZ+mHcACymCYIIgU1qNETAJMqABkgxJI7kEZiPQD3rZH6Xbb7QBO3aZAOOMelVev8MWWB/ZKZ9JEekRxWeGS6YyzxfoyT9VtopgOr58yMBIYRmfYkGPWad1Grus0i+7yNhW6kgWzA2jaTtQgZC+g78G58JAKQN3eCTJ+80O67ouotuFW3vBIG4ECPmDkfOTWUpoL8cmRG671FSLpuJGVXzBQg/eAWRsO1YHcASIOar38Saxm+J8Qy3lDxnHKqTx2kDnG7dirPUdH1Ik7MEAQrAwfXt2oe1wupO62yxkypj5zxTLJJ6oDxxW7CJet2rxDau5ffMuoQDfCEAEidpMBfLHAMiIpnT9X0tws12wRnKfEYW9gcvt2IkuYhRuJHJxyQ09QuTgkVIXqLd2NUbkTjwb7LHqdyzeuByrzEOQVWdsxsATbbEQu2CABPMzJ1VlbpF0GwiWkCBCdywi/ZAc73neZYKBJ8pnijbXGkNqyaFyH/j7L8dQ0ptbW0yoUCBdr3AXktuZikAsBHPqeSTVTq3DMDbUIgAAUSZA7sTkn/j0qN+s11L2ZrXI38+jzq7cznuZz/WkjSgctn0/5p19UTyTSGuzQXIDURCopwfvpz4aAeU/gaa3iubqZoCaJemUb8sc8R69pEVLLWt8ECJOZIKgH0jaTj6yaqRT9jTliPalkVxt9JBl4YuPeup5ztVgxmQGZI2nbMAgD5+9HcCgvwxttjcI4UTxlplc8kQOPWi74orjvbOrJejGtVps4OPSoVxIq0c1AvpXZCT6ZwTX0WWi6vFlrbZPb5UQ+HtMLYYBpDgMPnGaA2FEfh/XMyhJAK9z3U9hQnjXF0NjyO0mV/Wrha40+sUQ9AcPYQSFjyz8vWqDqGjuM7FVJz2q68Jm4Fa2yGJkSBx3pZx/hFMbayP9L9OtfDTbAIUiWHLAYGPSOwrUdHrFu20uKZV1DD6jg/l9Ky9r+3hEns20SPvoi8GdYO5rFxpLEtbJ9Y86/gW++kw5UpVfYflYnKPJegs1J4pkIKduKZmkFq6WrZ56OrYFODTgcUq2a9dvBRJNNUUrNu6OtfZaabXjvVH1HrA4XJoU6h4ltW2Ie4Sw5VAWj5kYFcss9uo7LRx/ZplnUocVMXRI2StY7pvE9xmBs28AiWdwveBgT3rUPCnXDqUYOFFxNu4KSRtadrZAIna33VTHK3UjZMbiuSH9X0dGHEUO9U8JB0YbhEH3ov6lc2oT7UB9T6vcQO7NCKCT8gM1PLkjGaVBxqUl2ZDq+lXC7G2hKSYPqJ5qLqenXbcb0IkBh8jwa1zwHrbevtNYuqqta8qGBOwzsB9SBj6VSePdCbe4fwWUX/0lkkfOPxqvJpWUUIPW7MxJNcBp2Kl/AWJFUckuznWNvogBq7vp9rYp1NA7ZCsR6hSfyFbkg8JETca6rGnbmlKmKndO6cty3c8xW4g3qOzoCA4B7MAS3uFNa0ZRldFdBNK+G1TESCViY711omkcyigM2dMxPNEvSulbVNxp8gLQODHqe3HvP31U6Miee/ej3xVpbdvS6d7LYuKA+3IO1ftZyJJM/KoTcpHTjqO/YMfrJkHgAkgekmTV/b6vgZ7ChYt6VI+G1RoeVvZTE0xcSlhq4TXWtHIyE602sgyCQRwamOlR2WqJk2ght9dW5btWzCMk7njLEzGfSr+7tspbNt95cAbl5DHkc+tZ4Vp3T6p0IIY+U8T99ZoeM2jSUtO4Ysp8seZeP/2A4+YqEHe2+8YZCGU+hBntVh4Svi+ptWbiomWuO8kyYhdsiM/lVtqOk/Et7bbKCCV8sHfOSxAk8yPpU5YItX7LeZhrafcqsOGUN94n+de2Cl20CqFH7oA+4RTWpvBRVnUY2zh7ehReKHOv9RI8oNK1/Vgs5zQzq9T9p2OMk/KuDNm5LjE6cePjtlF4l6wbY+GjQ7CWYHIX29z+VCE13V6s3LjXDyxn6cAfdFNKa6MePjGjOWyx0F9lIIJHyxPcitA8DdcFvUozEKr7rbeykqU3HvtY+0b3rO9OKudIsAg4n0mYOI+ftzSSdO0dMVyjxZu3iFyLc5IEkgAk4HYDJ+VZf+kDVBbKWwYNxhI4OxfMZ+uz76nWPF+o2qtxEKhQJJKv5Vwe8kkQcCDNBXiS/e1F03GAgCFVeFHJHuSeTUq5ZeTEWKUY0PeCtabeo2jG9cRjzL5h+G6ijxhqPjWyWyygq5xlWgKR8mAn3es/6Ne2ai0x7Oo+h8pn76OuoRMnMBxB91I/mfuqspOMq9MrBJxb9oB9Bp7Rt3viEhwq/D4gtvAIM9ts/UimLWnXbuZ9oG2SBP2gSFj1wfup/UWYZkMLvgCYGQZEngAkRM4kdpituX2PlOIIkR3UECffJq62cT0yYmpidnkHt9r6tz90CvG4xyzE/Mk1EQ07NK0UiyUup/jAdfRjkf7W5H5e1TNFodzpcsncCwUqcMN3l2ntBmJqo3VN6PrfhXVJ+wSA3tJwfpSSTp0PFpyVkjW2Ta1JU+sg+3tVqLaOIIBBFd8Z6fypcX/aT95H86qOn9SAIDUsXcUzZI8ZtEZEhyBwCaOtBdtvbGmuySLYgdlO4sATyvz47elBmlT9qS0xuJ+YBx86sB1ItcfzBdzoysDwJ8ox/tBI4wJpZpvotjpK2KOia3cUP9nJDHAIHJ/GrHavtSupFLoC75J8wgcPENkEja0ffntUi308wMdhUk2POLv+TPt1dDVJ6j09lyOKr1eu6rR54+abcUtHr0UOgDQWuFKkIleZaPINHNDq3suGUn3AMA/Or/TdbYvttXGtzDbjyz98cDn17Gh4rXPh1nsKdaNv6d4xtXLRe5+z2wGZiAN8ZAJ5qHrutq48jAj1BB/KsoS4Wtm2xkSCJ5BGMf32rmm6TuMC5tB9p/KpTg5RpyGUUn/K7DPW9VtWzNy4s+kyfuFDXXPEKvbNu2G8wiSIx3pp/DTIy7gdkje4Kny94Azxj51C11z9qdqqEQ+RWB4Ahfcng+55oY8UE7Ts01NLaoqlalC570X6TUaa5b3sERyWk/DUlXYrtVLYgbIGXbjcQBkAW2g1NlzIZlRAE330UqciYP2YUGeB9oc9um0SUGvYFaJ2YgAEyfkM4yeBRBYvXAP8t5iT5TmBhuMjzE+gmi7paWrlh7x1KbVWQipbbcFC7fLt8pnswnAMCa9a0z3ntqLYEgea5cCBi3mMKhZgdzDAEAKs5FTljUi0MjiCjXCCAVO6dxndOATk9ueOeK4b4OAQMgAFuTwT79sfd6VoS6TR2Nzai6rBQbgCbizKIABUSANxx/F9KE+qdb0lswEZ15Vtu3O2QACx3DfjtHvU3hSLL5DYO37KsQSIIHMj3+szx99Tn6ncIBZFc8EyVkj1HbAnnvVvY8TdPVB+z339wgmFsqQVk7tpO3nJXlZjM03a67oGtkfCOIBlU7tO4ndHp9xxR8f2I8tlFd6rgh7III/jJBkYkEGR9arb/wAK55g+xuNryRiIhgMiPWD86KdJc0l9mJCAKAuAzbjJAI8szB7ZmB3iomp6Xo7pYWtyQoIZpAKzBcKYkcDkZPtTxTQs6a0wTYgHkGO44PyrwuirO70VFAJZwcyg2O+MEkqYQFpABzjiml6Wnw/ttv3RsCT5YJUzPJOIA/5akRuRBN6kPcmpCaBgwV8ZE5Bgc52z+VPDQgpxB7SQTz3A4Ed/b3wNI39Muuj9YS7bNi+ecBj3+Z7HApm50B0O4FWUdyQMflVXb04Row6gyQRyPQn0/rXvgEg+Yn2khQPSB8/wpOKXRa5P/S2SuodQdhtEGBtG37Kgdge/zqMEhGHxE8wEjze2OI+vtSXsqh3MO+ABA/D5UgjeQFVycAASZPy+dZJIzv2TtBcFsrcNxoU42qMMMwQT9n0OO/pWh2OvafaslJgTkelBHT/DGpcgsmxZyH8pIODiD2J54qf/ANMarslqO3nbjtUp8W+y+NuhTqCKqNb0afNb59Ktlp63VOTOZoCntspggg+9LTNHD9Nt3xtYDdBIPyyaHNZ0F0J2Hd7d/wDmmUrQvEgIsU0z04+5cMCD6GmWFBGb0dQTXortkUthWYV0dt81Z6Y1WLzU/TPQbGReaW6QPUehpvqfT1uDcFhvakaczVpYak4q7KKbSr0Buo6ZcTlSPpEimS9xdsydhlQ2QPaPT2rRnAuAb/NAAE9o4qNe6BbcHJE/Wm5SQP5f4BH+IuWZnVW3IEKkQsLEYWPT/muWte4jzOQCCF3eSQQcqQZGM54xV9r/AAy4+zB/v0qlvdOdDDACjzYOCZK1PXrtwuS7j4i7XXcNu2Z2BYwoxA7ZyZqFauFTI5gjvwea8umb0p34B9KVyKxhroTbifsinGCd1/L19xXUsmvfC7xif7/Gk5FOH4SVvA5j0/h4XCgE+3A4ifWl2ULEx35+8fTmMewpvS6VmMAHP9/dRFp9F8NSdoJmJHPuB6D+lTnla9lYYU/RRtoSMlgBn92D9/HGZpSBgpU3DtOYgxPYmMYj8KmaxwIBBH9B2I79xVRdvnHM8UYykwzhGPo8qxB3EewgCRI+fvXZHct9Kj3LmRP400zn1j3qlNkXKK9EpjiJP9/3+FIZhxtB9Jk/zqMLp9aS1+txYvNEtNQVwAI9IBHOf5/fRZ4f0am7vKnaZuLuEQM7e0H6fjQVpVLtH9z/ADrRfDnT3S2DcJBPCEnA5z2HNSy6WikHabZbPcHqKa3j1pLWlXsBSI9j91TUSTkCq2Y5kD1An8v50/aQHjIp61z9aatf5rV1s5yQoVckme0fzpqQaVqqaWggj76JHEMoI9xVZqPDNsnyMV9jkf1FXdngUsc0bNxQH3+iXU4XePVTP4c1WXkKmGBB9CI/OtHHFV3X/wDLaimatAKrVLstFRqeXmiwIttNdq2092RVBp6ttLQCXWneptqqvT1Y2e1YyJmyaha7pSXRBFTEp1axgA6n4aKmUn6YqkuJdt/vOPqa1DV8GhPqtYD0Di6+6OWn5gH8Yp+31RxyiN94P4GmLtNijxi/RvJJey60XiFrczaVp48xBHrmDP3VKbxLJ3fCIMEE7+R/6M5ocWlpU3ihfRRfJyfZbajqyucoZPq8/d5aWmn3jFpwf4iYHtgrUvwv9o0T3OaDiktD+abe2Bx6OT7fjXF8N/6jnvGcUXmnU5FLya6AwSt+FAe7VO03hG2DJLH2xRfYqVbocm/YKRQaHo1m1lLYn1Ik/ec1ZJZusZCFR6kZPyB/M1e6T7Qq9scmn4JiubSAsdLvHKW8+rETT/8Ag172+9v/AK0Zjv8AMU5TLEiTyM//2Q=="
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Belgium Waffles
    </Typography>
    <Typography variant="body2" color="text.secondary">
    A cherished Belgian delicacy,known for their light, fluffy texture and deep pockets perfect for holding toppings like whipped cream, fruit, or syrup. They're a beloved treat enjoyed worldwide for their irresistible taste and versatility.</Typography>
  </CardContent>
</CardActionArea>
<CardActions>
<Button size="large" color="primary" onClick={handleLikeClick6}>
          ❤️ {likeCount6}
        </Button>
</CardActions>
</Card>
</div>
</div>
</>
  );
}