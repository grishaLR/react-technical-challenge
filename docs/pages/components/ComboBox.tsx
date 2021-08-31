import * as React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";



type Props = {
  strings: string[]
};

const searchBarIcons = {
  display: 'flex'
}
const inputStyle = {
  width: '400px',
  borderRadius: '2px',
}

const resultStyle = {
  marginTop: '5px',
  width: '400px',
  height: '400px',
  overflow: 'hidden',
  // overflowY: 'auto',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
}

const itemStyle = {
  textDecoration: 'none',
  width: '100%',
  height: '50px',
  marginLeft: '10px',
}

const ComboBox: React.FC<Props> = ( { strings }) => {

  const [filteredData, setFilteredData] = React.useState<string[]>([]);
  const [inputEntered, setInputEntered] = React.useState<string>('');

  const handleFilter = (e: React.FormEvent<HTMLInputElement>) =>{
    const inputWord = e.currentTarget.value;
    setInputEntered(inputWord);
    const filtered : string[] = strings.filter((country) => {
      return country.toLowerCase().includes(inputWord.toLowerCase());
    })

    if (inputWord === ''){
      setFilteredData([])
    } else {
      setFilteredData(filtered)
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setInputEntered('');
  }

  return (
    <div className='search'>
      <div className='searchInputs' style={searchBarIcons}>
        <input type='text' placeholder='Begin search here....' value={inputEntered} onChange={handleFilter} style={inputStyle}/>
        <div className='searchIcon' >
          {filteredData.length === 0 ? ( <SearchIcon />) : <CloseIcon id='clearButton' onClick={clearInput} />}
        </div>
      </div>
      <div style={!inputEntered.length ? {display: 'none'} : resultStyle} >
        {filteredData.map((country, key) =>{
          return (
            <div className='item' >
              <a href='www.someurl.io' style={itemStyle} key={key}>{country}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ComboBox
