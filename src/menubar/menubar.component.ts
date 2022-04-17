import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'menu-bar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    {
    this.items = [
      {
        label: 'Importações',
        icon: 'pi pi-upload',
        items: [
          {
            label: 'PEDIDOS',
            icon: 'pi pi-upload',
            items: [
              {
                label: 'Importar Pedidos - Geral',
              },
              {
                label: 'Importar Pedidos - Novos',
              },
              {
                label: 'Importar Pedidos Abertos - MAO'
              },
              {
                label: 'Importar Pedidos Abertos - eCaboclo'
              },
              {
                label: 'Importar Pedidos Abertos - Outros'
              }
            ],
          },
          {
            separator:true
          },
          {
            label: 'ESTOQUES',
            icon: 'pi pi-upload',
            items:[
              {
                label: 'Importar Estoque de Ordens Não Faturadas'
              },
              {
                label: 'Importar NTP CD MAP - ZSD018'
              },
            ]
          },
          {
            separator: true,
          },
          {
            label: 'LOJAS',
            icon: 'pi pi-upload',
            items:[
              {
                label:'Importar VL10'
              },
              {
                label:'Importar Vendas com Logística eCaboclo'
              },
              {
                label:'Importar Embarques'
              }
            ]
          },
          {
            separator: true
          },
          {
            label:'CANCELAMENTOS',
            icon: 'pi pi-upload',
            items:[
              {
                label:'Importar Não Aprovados'
              },
              {
                label:'Importar Ordens Canceladas'
              },
              {
                label:'Importar Garantias'
              }
            ]
          },
          {
            separator:true
          },
          {
            label:'COTA & TELEVENDAS',
            icon: 'pi pi-upload',
            items:[
              {
                label:'Importar Cota de Municípios'
              },
              {
                label:'Importar Vendas do Televendas'
              },
            ]
          },
          {
            separator:true
          },
          {
            label:'OUTROS',
            icon: 'pi pi-upload',
            items:[
              {
                label: 'Importar Clientes'
              },
              {
                label: 'Importar Grupos de Mercadoria'
              },
              {
                label: 'Importar Notas Fiscais'
              }
            ]
          }
        ],
      },
      {
        label: 'Usuários',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Usuários',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Meu cadastro',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Alterar senha',
            icon: 'pi pi-fw pi-users',
          },
        ],
      },
      {
        label: 'Logística',
        icon: 'pi pi-calendar-times',
        items: [
          {
            label: 'PEDIDOS',
            icon:'pi pi-shopping-cart',
            items: [
              {
                label:'Não Liberados'
              },
              {
                label:'Não Faturados'
              },
              {
                label:'Não Planilhados'
              },
              {
                label:'Entregas Pendentes'
              },
              {
                separator:true
              },
              {
                label:'Com Múltiplas Ordens'
              },
              {
                label:'Com Múltiplos Centros de Expedição'
              },
              {
                label:'Marketplace'
              },
              {
                label:'Primeira Compra'
              },
              {
                separator:true
              },
              {
                label:'Com: Reclamações, Cancelamentos, CAC´s'
              },
              {
                label:'Com Baixa Recorrência'
              },
              {
                label:'Pago com CC / Não Liberados'
              },
              {
                label:'Boleto não compensado'
              },
              {
                label:'PIX não compensado'
              },
              {
               separator: true
              },
              {
                label:'Com Entrada'
              },
              {
                label:'Com Status Divergente'
              },
              {
                label:'BOPIS'
              },
              {
                label:'Embarques'
              },
              {
                label:'Mercado'
              }
            ]
          },
        ],
      },
      {
      label: 'Acompanhamentos',
        icon: 'pi pi-table',
        items: [
          {
            label: 'CENTROS',
            icon:'pi pi-clone',
            items:[
              {
                label: 'Ordens sem itinerário'
              },
              {
                label: 'Direcionador de Centro Otimizado (eCaboclo)'
              },
              {
                label: 'VL10 das lojas'
              }
            ]
          },
          {
            label: 'NTP',
            icon: 'pi pi-times-circle',
            items:[
              {
                label:'Ordens sem saldo'
              },
              {
                label:'Resumo das Ordens sem saldo'
              },
              {
                label:'Desempenho no tratamento de Ordens'
              },
              {
                label:'Exportar Ordens p/ Planilha'
              }
            ]
          },
          {
            label:'ENTREGAS',
            icon:'pi pi-map-marker',
            items:[
              {
                label: 'Entregas em aberto'
              }
            ]
          },
          {
            label:'CANCELAMENTOS',
            icon:'pi pi-times',
            items:[
              {
                label:'Pedidos com divergência de Status'
              }
            ]
          },
          {
            label:'E-MAIL P/ CD MAO',
            icon:'pi pi-send',
            items:[
              {
                label:'Confirmação de Saldo'
              },
              {
                label:'Performance do Faturamento de Ordens'
              },
              {
                label:'Ordens Faturadas e Não Planilhadas'
              },
              {
                label:'Pedidos Liberados e Não Faturados'
              },
              {
                label:'Pedidos Não Entregues'
              }
            ]
          },
          {
            label:'COTA E TELEVENDAS',
            icon:'pi pi-money-bill',
            items:[
              {
                label:'Cota dos Stands vs Faturado'

              },
              {
                label:'Cálculo das Cotas (Planilha)'
              }
            ]
          }
        ],
      },
      {
        label:'Relatórios',
        icon:'pi pi-list',
        items:[
          {
            label:'GERAL',
            icon:'pi pi-align-justify',
            items:[
              {
                label:'Pedidos Aprovados'
              },
              {
                label:'Evolução de Vendas'
              },
              {
                label:'Grupos de Mercadoria'
              },
              {
                separator: true
              },
              {
                label:'Perfil de Clientes'
              },
              {
                label:'Primeira Compra / Recorrência'
              },
              {
                label:'Fidelidade'
              },
              {
                label:'Formas de Pagamentos'
              },
              {
                label:'Cartão Bemol'
              },
              {
                separator: true
              },
              {
                label:'Overview de Pedidos'
              },
              {
                label:'Pedidos não aprovados'
              },
              {
                label:'Cancelamentos'
              },
              {
                separator: true
              },
              {
                label: 'Ordens de vendas'
              },
              {
                label: 'Entregas Fracionadas'
              },
              {
                label:'Prazo de Entrega'
              },
              {
                label:'BOPIS'
              }
            ]
          },
          {
            label:'MUNICÍPIOS',
            icon:'pi pi-map',
            items:[
              {
                label:'Formas de Pagamento'
              },
              {
                label:'Primeira Compra / Recorrência'
              },
              {
                label:'Fidelidade'
              },
              {
                label:'Cartão Bemol'
              }
            ]
          },
          {
            label:'LOJAS',
            icon:'pi pi-shopping-cart',
            items:[
              {
                label:'Embarque Tradicional (901)'
              },
              {
                label:'Venda de Loja'
              }

            ]
          }

        ]
      }
     ];
    }
  }
}
