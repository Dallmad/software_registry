import s from './RegistrySearch.module.scss'
import {Input} from '../../../components/Input/Input'
import {Button} from '../../../components/Button/Button'
import img_1 from '../../../assets/images/img_1.svg'
import {useState} from 'react';
import {setSearchAC} from '../../../state/main-reducer';
import {useDispatch} from 'react-redux';

export const RegistrySearch = () => {

    const dispatch = useDispatch()

    const [search, setSearch] = useState<string>( '')

    const searchPacksHandler = () => {
        dispatch(setSearchAC(search))
    }

  return (
      <>
          <div className={s.container}>
              <div>
                  <h1 className={s.title}>Реестр программного обеспечения</h1>
                  <div className={s.description}>
                      Единый реестр программ для электронных вычислительных машин и баз данных
                  </div>
                  <div className={s.amount}>
                      Включено ПО в реестр:
                      <span className={s.number}> 13 438</span>
                  </div>
                  <div className={s.amount}>
                      Правообладателей:
                      <span className={s.number}> 4 272</span>
                  </div>
                  <div className={s.search}>
                      <Input
                          value={search}
                          className={s.input}
                          placeholder={'Искать реестр'}
                          onChange={(e) => setSearch(e.currentTarget.value)}
                      />
                      <Button
                          className={s.button}
                          onClick={searchPacksHandler}
                      >
                          <span className={s.span}>
                              Искать
                          </span>
                      </Button>
                  </div>
              </div>

              <img src={img_1} alt='image' className={s.img}/>
          </div>
      </>
  )
}