import React from 'react'
import {Button, Input, Label, FormGroup} from 'reactstrap'

class LearnState extends React.Component {
  state = {
    nama: "",
    tempName: "",
    gender: "P",
    umur: 20,
    temanString: ["alif", "khalifa"],
    teman: [{
      id: 1,
      nama: "alif",
      umur: 20
    }, {
      id: 2,
      nama: "khalifa",
      umur: 24
    }, {
      id: 3,
      nama: "firdausy",
      umur: 25
    }, {
      id: 4,
      nama: "farhan",
      umur: 22
    }, {
      id: 5,
      nama: "hana",
      umur: 23
    }
    ],
    keluarga: {
      ayah: "who",
      ibu: "siapa"
    }
  }

  gantiUmur = () => {
    if (this.state.umur < 25) {
      this.setState({umur: this.state.umur + 1 })
    }
  }

  tambahTeman = () => {
    let teman = this.state.teman
    const newState = teman.map(obj =>
      obj.id === 1 ? { ...obj, umur: 19 } : obj
    );
    // console.log(nama == "rehan" ? true : false)
    // teman.push({...newAlif, umur: 19})
    this.setState({teman: newState})
  }

  changeName = (nama) => {
    this.setState({tempName: nama})
  }

  clickButtonName = () => {
    this.setState({nama: this.state.tempName})
  }

  componentDidMount() {
    this.setState({nama: "Rehan"})
  }

  componentDidUpdate() {
    console.log("did update")
  }

  render() {
    // console.log(this.state.temanString)
    console.log("render")
    return(
      <div>
        <h1>Hello {this.state.nama} umur {this.state.umur}</h1>
        <h2>teman</h2>
        {this.state.teman.map((data, i) => {
          if (data.umur < 23) {
            return(
              <>
                <p>namanya {data.nama}</p>
                <p>umur: {data.umur}</p>
              </>
            )
          }
        })}
        <h2>ayah {this.state.keluarga.ayah}</h2>
        <Button onClick={() => this.gantiUmur()} color="primary">tambah umur</Button>
        <Button onClick={() => this.tambahTeman()} color="primary">tambah temanString</Button>
        <br/>
        <br/>
        <FormGroup>
          <Label for="exampleEmail">Nama</Label>
          <Input type="name" name="name" id="nameuser" placeholder="Input nama disini" onChange={(e) => this.changeName(e.target.value)} />
          <Button color="warning" onClick={() => this.clickButtonName()} >ganti nama</Button>
        </FormGroup>
      </div>
    )
  }
}

export default LearnState