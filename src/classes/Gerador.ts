import Cliente from './Cliente'
import Endereco from './Endereco'
import Estoque from './Estoque'
import Loja from './Loja'
import Produto from './Produto'

const p1 : Produto = new Produto('Mouse óptico', 'Periférico', 39.9)
const p2 : Produto = new Produto('Teclado membrana', 'Periférico', 49.9)
const p3 : Produto = new Produto('Teclado mecânico', 'Periférico', 249.9)
const p4 : Produto = new Produto('Fone de ouvido intra-auricular', 'Periférico', 74.9)
const p5 : Produto = new Produto('Headset (wireless)', 'Periférico', 229.9)
const p6 : Produto = new Produto('Headset (com fio)', 'Periférico', 179.9)
const p7 : Produto = new Produto('Microfone de mesa', 'Periférico', 359.9)
const p8 : Produto = new Produto('Monitor 27"', 'Periférico', 2359.9)
const p9 : Produto = new Produto('Webcam 1080p 60fps', 'Periférico', 499.9)
const p10 : Produto = new Produto('Webcam 720p 30fps', 'Periférico', 429.9)

const p11 : Produto = new Produto('The Sims 4 Deluxe', 'Games', 129.9)
const p12 : Produto = new Produto('The Witcher 3', 'Games', 129.9)
const p13 : Produto = new Produto('Far Cry 6', 'Games', 249.9)
const p14 : Produto = new Produto('Grand Theft Auto 5', 'Games', 129.9)
const p15 : Produto = new Produto('Watch Dogs Legion', 'Games', 129.9)
const p16 : Produto = new Produto('Stardew Valley', 'Games', 129.9)
const p17 : Produto = new Produto('Battlefield 2042', 'Games', 129.9)
const p18 : Produto = new Produto('FIFA 22', 'Games', 129.9)
const p19 : Produto = new Produto('Minecraft', 'Games', 129.9)
const p20 : Produto = new Produto('Overcooked 2', 'Games', 129.9)

const p21 : Produto = new Produto('Processador última geração', 'Hardware', 3129.9)
const p22 : Produto = new Produto('Memória 3200Mhz 8gb DDR4', 'Hardware', 329.9)
const p23 : Produto = new Produto('Placa de vídeo', 'Hardware', 8329.9)
const p24 : Produto = new Produto('Fonte 750w 80 plus gold', 'Hardware', 829.9)
const p25 : Produto = new Produto('Water cooler 120mm', 'Hardware', 429.9)
const p26 : Produto = new Produto('Placa mãe', 'Hardware', 1429.9)
const p27 : Produto = new Produto('Gabinete', 'Hardware', 329.9)
const p28 : Produto = new Produto('SSD 1TB', 'Hardware', 829.9)
const p29 : Produto = new Produto('HD 1TB', 'Hardware', 329.9)
const p30 : Produto = new Produto('Ventoinha 120mm', 'Hardware', 129.9)

const end1 : Endereco = new Endereco('Rua Roberto Carlos', 'Especial Fim de Ano', 2512, '48664-752', 'Globocity', 'G1')
const end2 : Endereco = new Endereco('Rua da Vieira', 'Fenda do Bikini', 42, '54684-445', 'Atlantida', 'AT', 'Afundada próxima ao Triângulo das Bermudas')
const end3 : Endereco = new Endereco('Beco Diagonal', 'Azkaban', 3, '42624-654', 'Londres', 'HP', 'Perto da loja do Olivaras')

const est1 : Estoque = new Estoque()
est1.adicionarProduto(p1, 15)
est1.adicionarProduto(p4, 26)
est1.adicionarProduto(p7, 65)
est1.adicionarProduto(p10, 42)
est1.adicionarProduto(p13, 78)
est1.adicionarProduto(p16, 30)
est1.adicionarProduto(p19, 14)
est1.adicionarProduto(p22, 28)
est1.adicionarProduto(p25, 19)
est1.adicionarProduto(p28, 91)

const est2 : Estoque = new Estoque()
est2.adicionarProduto(p2, 82)
est2.adicionarProduto(p5, 133)
est2.adicionarProduto(p8, 13)
est2.adicionarProduto(p11, 24)
est2.adicionarProduto(p14, 75)
est2.adicionarProduto(p17, 46)
est2.adicionarProduto(p20, 51)
est2.adicionarProduto(p23, 63)
est2.adicionarProduto(p26, 20)
est2.adicionarProduto(p29, 17)

const est3 : Estoque = new Estoque()
est3.adicionarProduto(p3, 12)
est3.adicionarProduto(p6, 42)
est3.adicionarProduto(p9, 86)
est3.adicionarProduto(p12, 92)
est3.adicionarProduto(p15, 22)
est3.adicionarProduto(p18, 74)
est3.adicionarProduto(p21, 33)
est3.adicionarProduto(p24, 41)
est3.adicionarProduto(p27, 53)
est3.adicionarProduto(p30, 82)


export const Loja1 : Loja = new Loja('Unidade de São Paulo', '47.989.291/0001-56', end1, est1)
export const Loja2 : Loja = new Loja('Undiade de Vila Velha', '79.855.589/0001-60', end2, est2)
export const Loja3 : Loja = new Loja('Unidade de Iconha', '62.622.452/0001-62', end3, est3)

// =======================================================================================================

const end4 = new Endereco('Rua dos Anjos', 'Céu Azul', 33, '29280-000', 'Divinópolis', 'ES', 'Você vai saber quando ver')
export const clientePadrao = new Cliente('Ricardo', '123.654.741-12', '(27) 98765-4321', 'ricardo@uvv.br', 'admin', end4)