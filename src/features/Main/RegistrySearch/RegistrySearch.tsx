import s from './RegistrySearch.module.scss'
import {Input} from '../../../components/Input/Input'
import {Button} from '../../../components/Button/Button'
import img_1 from '../../../assets/images/img_1.svg'

export const RegistrySearch = () => {
  return (
      <>
          <div>
              Реестр программного обеспечения
              <p>
                  Единый реестр программ для электронных вычислительных машин и баз данных
              </p>
              <p>
                  Включено ПО в реестр:
                  <span> 13 438</span>
              </p>
              <p>
                  Правообладателей:
                  <span> 4 272</span>
              </p>
              <div>
                  <Input/>
                  <Button>Искать</Button>
              </div>
          </div>
          <img src={img_1} alt='image'/>
      </>
  )
}