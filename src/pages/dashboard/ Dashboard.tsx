import { BarraDeFerramentas } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      title={'Página inicial'} 
      barraDeFerramentas={(
        <BarraDeFerramentas 
          mostrarInputBusca
          textoBotaoNovo='Nova'
        />
      )}>
      <p>Testando</p>
    </LayoutBaseDePagina>
  );
};
