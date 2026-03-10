// 1. Banco de Dados de Cabos (Nova Lista Atualizada)
const catalogoCabos = [
    { codigo: "0252-0296-0", descricao: "CT RP 65X900", pesoMetro: 13.46 },
    { codigo: "0252-0322-6", descricao: "CCE-APL 50X2 PARES", pesoMetro: 0.045 },
    { codigo: "0252-0319-3", descricao: "CCE-APL 50X3 PARES", pesoMetro: 0.051 },
    { codigo: "0252-0323-7", descricao: "CCE-APL 50X4 PARES (S/ LOTE)", pesoMetro: 0.057 },
    { codigo: "0252-0324-8", descricao: "CCE-APL 50X5 PARES (S/ LOTE)", pesoMetro: 0.067 },
    { codigo: "0252-0325-9", descricao: "CCE-APL 50X6 PARES (S/ LOTE)", pesoMetro: 0.074 },
    { codigo: "0252-0327-1", descricao: "CTP-APL 40X300 PARES", pesoMetro: 1.021 },
    { codigo: "0252-0010-0", descricao: "TEL CTP-APL 40X10 COM PAR PILOTO", pesoMetro: 0.071 },
    { codigo: "0252-0012-7", descricao: "TEL CTP-APL 40X20 COM PAR PILOTO", pesoMetro: 0.108 },
    { codigo: "0252-0014-3", descricao: "TEL CTP-APL 40X30 COM PAR PILOTO", pesoMetro: 0.139 },
    { codigo: "0252-0015-1", descricao: "TEL CTP-APL 40X50 COM PAR PILOTO", pesoMetro: 0.211 },
    { codigo: "0252-0017-8", descricao: "TEL CTP-APL 40X100 COM PAR PILOTO", pesoMetro: 0.367 },
    { codigo: "0252-0019-4", descricao: "TEL CTP-APL 40X200 COM PAR PILOTO", pesoMetro: 0.691 },
    { codigo: "0252-0020-8", descricao: "TEL CTP-APL 40X300 COM PAR PILOTO", pesoMetro: 0.989 },
    { codigo: "0252-0021-6", descricao: "TEL CTP-APL 40X400 COM PAR PILOTO", pesoMetro: 1.27 },
    { codigo: "0252-0022-4", descricao: "TEL CTP-APL 40X600 COM PAR PILOTO", pesoMetro: 1.855 },
    { codigo: "0252-0023-2", descricao: "TEL CTP-APL 40X900 COM PAR PILOTO", pesoMetro: 2.806 },
    { codigo: "0252-0024-0", descricao: "TEL CTP-APL 40X1200 COM PAR PILOTO", pesoMetro: 3.705 },
    { codigo: "0252-0025-9", descricao: "TEL CTP-APL 40X1500 COM PAR PILOTO", pesoMetro: 4.634 },
    { codigo: "0252-0026-7", descricao: "TEL CTP-APL 40X1800 COM PAR PILOTO", pesoMetro: 5.516 },
    { codigo: "0252-0027-5", descricao: "TEL CTP-APL 40X2400 COM PAR PILOTO", pesoMetro: 7.583 },
    { codigo: "0252-0030-5", descricao: "TEL CTP-APL 50X20 COM PAR PILOTO", pesoMetro: 0.155 },
    { codigo: "0252-0032-1", descricao: "TEL CTP-APL 50X30 COM PAR PILOTO", pesoMetro: 0.2 },
    { codigo: "0252-0033-0", descricao: "TEL CTP-APL 50X50 COM PAR PILOTO", pesoMetro: 0.309 },
    { codigo: "0252-0035-6", descricao: "TEL CTP-APL 50X100 COM PAR PILOTO", pesoMetro: 0.565 },
    { codigo: "0252-0037-2", descricao: "TEL CTP-APL 50X200 COM PAR PILOTO", pesoMetro: 1.06 },
    { codigo: "0252-0038-0", descricao: "TEL CTP-APL 50X300 COM PAR PILOTO", pesoMetro: 1.513 },
    { codigo: "0252-0039-9", descricao: "TEL CTP-APL 50X400 COM PAR PILOTO", pesoMetro: 1.954 },
    { codigo: "0252-0040-2", descricao: "TEL CTP-APL 50X600 COM PAR PILOTO", pesoMetro: 3.042 },
    { codigo: "0252-0041-0", descricao: "TEL CTP-APL 50X900 COM PAR PILOTO", pesoMetro: 4.257 },
    { codigo: "0252-0042-9", descricao: "TEL CTP-APL 50X1200 COM PAR PILOTO", pesoMetro: 5.65 },
    { codigo: "0252-0043-7", descricao: "TEL CTP-APL 50X1500 COM PAR PILOTO", pesoMetro: 6.083 },
    { codigo: "0252-0044-5", descricao: "TEL CTP-APL 65X10 COM PAR PILOTO", pesoMetro: 0.145 },
    { codigo: "0252-0046-1", descricao: "TEL CTP-APL 65X20 COM PAR PILOTO", pesoMetro: 0.222 },
    { codigo: "0252-0048-8", descricao: "TEL CTP-APL 65X30 COM PAR PILOTO", pesoMetro: 0.322 },
    { codigo: "0252-0049-6", descricao: "TEL CTP-APL 65X50 COM PAR PILOTO", pesoMetro: 0.499 },
    { codigo: "0252-0051-8", descricao: "TEL CTP-APL 65X100 COM PAR PILOTO", pesoMetro: 0.915 },
    { codigo: "0252-0053-4", descricao: "TEL CTP-APL 65X200 COM PAR PILOTO", pesoMetro: 1.828 },
    { codigo: "0252-0054-2", descricao: "TEL CTP-APL 65X300 COM PAR PILOTO", pesoMetro: 2.496 },
    { codigo: "0252-0055-0", descricao: "TEL CTP-APL 65X400 COM PAR PILOTO", pesoMetro: 3.268 },
    { codigo: "0252-0056-9", descricao: "TEL CTP-APL 65X600 COM PAR PILOTO", pesoMetro: 5.067 },
    { codigo: "0252-0057-7", descricao: "TEL CTP-APL 65X900 COM PAR PILOTO", pesoMetro: 7.071 },
    { codigo: "0252-0081-0", descricao: "TEL CCE APL ASF 65X10", pesoMetro: 0.214 },
    { codigo: "0252-0104-2", descricao: "TEL CCE APL 65X6", pesoMetro: 0.12 },
    { codigo: "0252-0119-0", descricao: "TEL CT APL 50X600", pesoMetro: 2.96 },
    { codigo: "0252-0125-5", descricao: "TEL CTP-APL-SN 50X30", pesoMetro: 0.215 },
    { codigo: "0252-0126-3", descricao: "TEL CTP-APL-SN 50X50", pesoMetro: 0.344 },
    { codigo: "0252-0127-1", descricao: "TEL CTP-APL-SN 50X100", pesoMetro: 0.593 },
    { codigo: "0252-0128-0", descricao: "TEL CTP-APL-SN 50X200", pesoMetro: 1.127 },
    { codigo: "0252-0129-8", descricao: "TEL CTP-APL-SN 50X400", pesoMetro: 2.23 },
    { codigo: "0252-0134-4", descricao: "TEL CT APL 32X3600 PARES", pesoMetro: 7.68 },
    { codigo: "0252-0141-7", descricao: "TEL CTS-APL 40X2400", pesoMetro: 7.221 },
    { codigo: "0252-0159-0", descricao: "TEL CTP-APL 40X20 P PILOTO/ 125MM", pesoMetro: 0.116 },
    { codigo: "0252-0160-3", descricao: "TEL CTP-APL 40X30 P PILOTO/ 125MM", pesoMetro: 0.152 },
    { codigo: "0252-0161-1", descricao: "TEL CTP-APL 40X50 P PILOTO/ 125MM", pesoMetro: 0.204 },
    { codigo: "0252-0162-0", descricao: "TEL CTP-APL 40X100 P PILOTO/ 125MM", pesoMetro: 0.388 },
    { codigo: "0252-0163-8", descricao: "TEL CTP-APL 40X200 P PILOTO/ 125MM", pesoMetro: 0.711 },
    { codigo: "0252-0164-6", descricao: "TEL CTP-APL 40X300 P PILOTO/ 125MM", pesoMetro: 1.021 },
    { codigo: "0252-0165-4", descricao: "TEL CTP-APL 40X400 P PILOTO/ 125MM", pesoMetro: 1.3 },
    { codigo: "0252-0167-0", descricao: "TEL CTP-APL 40X600 P PILOTO/ 125MM", pesoMetro: 1.941 },
    { codigo: "0252-0168-9", descricao: "TEL CTP-APL 40X900 P PILOTO/ 125MM", pesoMetro: 2.986 },
    { codigo: "0252-0169-7", descricao: "TEL CTP-APL 40X1200 P PILOTO/ 125MM", pesoMetro: 3.71 },
    { codigo: "0252-0170-0", descricao: "TEL CTS-APL 40X400", pesoMetro: 1.3 },
    { codigo: "0252-0171-9", descricao: "TEL CTS-APL 40X600", pesoMetro: 1.913 },
    { codigo: "0252-0172-7", descricao: "TEL CTS-APL 40X900", pesoMetro: 2.839 },
    { codigo: "0252-0173-5", descricao: "TEL CTS-APL 40X1200", pesoMetro: 3.727 },
    { codigo: "0252-0174-3", descricao: "TEL CTP-APL 40X1500 P PILOTO/ 125MM", pesoMetro: 4.82 },
    { codigo: "0252-0175-1", descricao: "TEL CTS-APL 40X1800", pesoMetro: 5.497 },
    { codigo: "0252-0176-0", descricao: "TEL CTS-APL 40X2400", pesoMetro: 7.221 },
    { codigo: "0252-0178-6", descricao: "TEL CTP-APL 40X1800 P PILOTO/ 125MM", pesoMetro: 5.642 },
    { codigo: "0252-0179-4", descricao: "TEL CTS-APL 50X400", pesoMetro: 1.953 },
    { codigo: "0252-0180-8", descricao: "TEL CTS-APL 50X600", pesoMetro: 2.861 },
    { codigo: "0252-0181-6", descricao: "TEL CTS-APL 50X900", pesoMetro: 4.242 },
    { codigo: "0252-0182-4", descricao: "TEL CTS APL 50X1200", pesoMetro: 5.609 },
    { codigo: "0252-0183-2", descricao: "TEL CTP-APL 40X2400 P PILOTO/ 125MM", pesoMetro: 7.583 },
    { codigo: "0252-0186-7", descricao: "TEL CTP-APL 50X20 P PILOTO/ 125MM", pesoMetro: 0.155 },
    { codigo: "0252-0190-5", descricao: "TEL CTP-APL 50X30 P PILOTO/ 125MM", pesoMetro: 0.211 },
    { codigo: "0252-0192-1", descricao: "TEL CTP-APL 50X50 P PILOTO/ 125MM", pesoMetro: 0.309 },
    { codigo: "0252-0193-0", descricao: "TEL CTP-APL 50X100 P PILOTO/ 125MM", pesoMetro: 0.565 },
    { codigo: "0252-0194-8", descricao: "TEL CTP-APL 50X200 P PILOTO/ 125MM", pesoMetro: 1.089 },
    { codigo: "0252-0196-4", descricao: "TEL CT APL 40X200", pesoMetro: 0.735 },
    { codigo: "0252-0198-0", descricao: "TEL CT APL 40X400", pesoMetro: 1.39 },
    { codigo: "0252-0199-9", descricao: "TEL CT APL 40X600", pesoMetro: 1.97 },
    { codigo: "0252-0200-6", descricao: "TEL CT APL 40X900", pesoMetro: 2.88 },
    { codigo: "0252-0201-4", descricao: "TEL CT APL 40X1200", pesoMetro: 3.74 },
    { codigo: "0252-0202-2", descricao: "TEL CT-APL 40X1500", pesoMetro: 4.76 },
    { codigo: "0252-0203-0", descricao: "TEL CT APL 40X1800", pesoMetro: 5.48 },
    { codigo: "0252-0204-9", descricao: "TEL CT APL 40X2400", pesoMetro: 7.05 },
    { codigo: "0252-0205-7", descricao: "TEL CT APL 50X200", pesoMetro: 1.09 },
    { codigo: "0252-0207-3", descricao: "TEL CT APL 50X400", pesoMetro: 2.0 },
    { codigo: "0252-0208-1", descricao: "TEL CT APL 50X900", pesoMetro: 4.28 },
    { codigo: "0252-0209-0", descricao: "TEL CT APL 50X1200", pesoMetro: 5.65 },
    { codigo: "0252-0210-3", descricao: "TEL CT APL 65X200", pesoMetro: 1.73 },
    { codigo: "0252-0211-1", descricao: "TEL CTP-APL 50X400 P PILOTO/ 125MM", pesoMetro: 2.017 },
    { codigo: "0252-0213-8", descricao: "TEL CT APL 65X600", pesoMetro: 4.76 },
    { codigo: "0252-0215-4", descricao: "TEL CTP-APL 50X600 P PILOTO/ 125MM", pesoMetro: 2.918 },
    { codigo: "0252-0216-2", descricao: "TEL CTP-APL 50X900 P PILOTO/ 125MM", pesoMetro: 4.564 },
    { codigo: "0252-0219-7", descricao: "TEL CTP-APL 40X20", pesoMetro: 0.122 },
    { codigo: "0252-0232-4", descricao: "TEL CTP-APL 50X300", pesoMetro: 1.828 },
    { codigo: "0252-0236-7", descricao: "TEL CTP-APL 65X50", pesoMetro: 0.538 },
    { codigo: "0252-0240-5", descricao: "TEL CTP-APL 65X30 P PILOTO/ 125MM", pesoMetro: 0.328 },
    { codigo: "0252-0242-1", descricao: "TEL CTP-APL 65X50 P PILOTO/ 125MM", pesoMetro: 0.521 },
    { codigo: "0252-0244-8", descricao: "TEL CTP-APL 65X100 P PILOTO/ 125MM", pesoMetro: 0.936 },
    { codigo: "0252-0245-6", descricao: "TEL CTP-APL 65X200 P PILOTO/ 125MM", pesoMetro: 1.828 },
    { codigo: "0252-0251-0", descricao: "TEL CTP-APL-AC 50X50 PPILOTO/125MM", pesoMetro: 0.28 },
    { codigo: "0252-0252-9", descricao: "TEL CTP-APL-AC 50X100 PPILOTO/125MM", pesoMetro: 0.56 },
    { codigo: "0252-0254-5", descricao: "TEL CTP-APL-AC 50X200 PPILOTO/125MM", pesoMetro: 1.09 },
    { codigo: "0252-0261-8", descricao: "TEL CTP-APL-AC 50X200 C/ PAR PILOTO", pesoMetro: 1.09 },
    { codigo: "0252-0267-7", descricao: "TEL CTP-APL-AC 50X100 C/ PAR PILOTO", pesoMetro: 0.56 },
    { codigo: "0252-0268-5", descricao: "TEL CTP-APL-AC 50X50 C/ PAR PILOTO", pesoMetro: 0.28 },
    { codigo: "0252-0286-9", descricao: "CT RP 40X100", pesoMetro: 1.41 },
    { codigo: "0252-0287-1", descricao: "CT RP 40X200", pesoMetro: 1.41 },
    { codigo: "0252-0289-6", descricao: "CT RP 40X400", pesoMetro: 1.41 },
    { codigo: "0252-0290-5", descricao: "CT RP 40X600", pesoMetro: 4.83 },
    { codigo: "0252-0291-2", descricao: "CT RP 40X900", pesoMetro: 6.67 },
    { codigo: "0252-0292-4", descricao: "CT RP 40X1200", pesoMetro: 8.43 },
    { codigo: "0252-0294-9", descricao: "CT RP 40X1800", pesoMetro: 11.82 },
    { codigo: "0252-0295-8", descricao: "CT RP 40X2400", pesoMetro: 15.07 },
    { codigo: "0252-0304-8", descricao: "CCE-APL-ASF 50X4 PARES", pesoMetro: 0.092 },
    { codigo: "0252-0350-0", descricao: "CT RP 50X600", pesoMetro: 6.873 },
    { codigo: "0252-0354-4", descricao: "TEL CTS-APL 40X1500", pesoMetro: 4.534 },
    { codigo: "0252-0372-2", descricao: "TEL CT RP 40X50", pesoMetro: 0.928 },
    { codigo: "0252-0377-7", descricao: "TEL CT RP 40X600", pesoMetro: 4.83 },
    { codigo: "0252-0379-9", descricao: "TEL CT RP 40X1200", pesoMetro: 8.43 },
    { codigo: "0252-0396-0", descricao: "CTS-APL-G 40X600", pesoMetro: 1.91 },
    { codigo: "0252-0397-0", descricao: "CTS-APL-G 40X2400", pesoMetro: 7.22 },
    { codigo: "0252-0398-0", descricao: "CTS-APL-G 40X1200", pesoMetro: 3.73 },
    { codigo: "0252-0399-0", descricao: "CTS-APL-G 40X1800", pesoMetro: 5.5 },
    { codigo: "0352-0004-9", descricao: "TEL CI 50X1200 COM PAR PILOTO", pesoMetro: 6.64 },
    { codigo: "0352-0013-8", descricao: "TEL CI 40X600 COM PAR PILOTO", pesoMetro: 2.45 },
    { codigo: "0352-0018-9", descricao: "TEL CI 50X100 COM PAR PILOTO", pesoMetro: 0.658 },
    { codigo: "0352-0021-9", descricao: "TEL CI 50X400 COM PAR PILOTO", pesoMetro: 2.49 },
    { codigo: "0352-0022-7", descricao: "TEL CI 50X600 COM PAR PILOTO", pesoMetro: 2.915 },
    { codigo: "0352-0078-2", descricao: "TEL CI 50X100", pesoMetro: 0.658 },
    { codigo: "0352-0082-0", descricao: "TEL CI 50X600", pesoMetro: 3.55 },
    { codigo: "0252-0028-3", descricao: "TEL CTP-APL 50X10 COM PAR PILOTO", pesoMetro: 0.092 },
    { codigo: "0252-0072-0", descricao: "TEL CCE APL ASF 65X6", pesoMetro: 0.161 },
    { codigo: "0252-0080-1", descricao: "TEL CCE APL ASF 40X30", pesoMetro: 0.22 },
    { codigo: "0252-0082-8", descricao: "TEL CCE APL ASF 50X20", pesoMetro: 0.228 },
    { codigo: "0252-0123-9", descricao: "TEL CTP-APL-SN 50X10", pesoMetro: 0.11 },
    { codigo: "0252-0206-5", descricao: "TEL CTP-APL 50X300 P PILOTO/ 125MM", pesoMetro: 1.53 },
    { codigo: "0252-0212-0", descricao: "TEL CT APL 65X400", pesoMetro: 3.3 },
    { codigo: "0252-0214-6", descricao: "TEL CT APL 65X900", pesoMetro: 6.65 },
    { codigo: "0252-0221-9", descricao: "TEL CTP-APL 40X50", pesoMetro: 0.252 },
    { codigo: "0252-0222-7", descricao: "TEL CTP-APL 40X100", pesoMetro: 0.414 },
    { codigo: "0252-0223-5", descricao: "TEL CTP-APL 40X200", pesoMetro: 0.744 },
    { codigo: "0252-0231-6", descricao: "TEL CTP-APL 50X200", pesoMetro: 1.152 },
    { codigo: "0252-0296-0", descricao: "CT RP 65X900", pesoMetro: 13.46 },
    { codigo: "0252-0349-9", descricao: "CT RP 50X900", pesoMetro: 8.91 },
    { codigo: "0252-0351-1", descricao: "CT RP 50X1200", pesoMetro: 11.128 },
    { codigo: "0252-0373-3", descricao: "TEL CT RP 40X100", pesoMetro: 1.41 },
    { codigo: "0252-0063-1", descricao: "TEL CTP-APL 90X50 COM PAR PILOTO", pesoMetro: 0.908 },
    { codigo: "0252-0107-7", descricao: "TEL CTP-PCM-G 65X200", pesoMetro: 1.73 },
    { codigo: "0252-0131-0", descricao: "TEL CCE APL ASF 40X20", pesoMetro: 0.165 },
    { codigo: "0252-0197-2", descricao: "TEL CT APL 40X300", pesoMetro: 1.06 },
    { codigo: "0252-0280-4", descricao: "TEL CTP-APL-AC 50X300 C/ PAR PILOTO", pesoMetro: 1.627 },
    { codigo: "0352-0003-0", descricao: "TEL CI 50X900 COM PAR PILOTO", pesoMetro: 4.904 },
    { codigo: "0352-0079-0", descricao: "TEL CI 50X200", pesoMetro: 1.28 },
    { codigo: "0352-0095-2", descricao: "TELEF METAL INTERNO CTMI 50X1200 CM", pesoMetro: 5.55 },
    { codigo: "0252-0130-1", descricao: "TEL CTP-APL SN 50X600", pesoMetro: 3.48 },
    { codigo: "0252-0220-0", descricao: "TEL CTP-APL 40X30", pesoMetro: 0.162 },
    { codigo: "0252-0235-9", descricao: "TEL CTP-APL 65X30", pesoMetro: 0.33 },
    { codigo: "0252-0230-8", descricao: "TEL CTP-APL 50X100", pesoMetro: 0.614 },
    { codigo: "0252-0158-1", descricao: "TEL CTS-APL 50X400", pesoMetro: 1.953 },
    { codigo: "0252-0184-0", descricao: "TEL CTS-APL 40X3600", pesoMetro: 10.71 },
    { codigo: "0252-0227-8", descricao: "TEL CTP-APL 50X20", pesoMetro: 0.15 },
    { codigo: "0252-0326-0", descricao: "CCE-APL-ASF 50X10 PARES", pesoMetro: 0.163 },
    { codigo: "0252-0392-0", descricao: "TEL CTS-APL 65X400", pesoMetro: 1.19 },
    { codigo: "0252-0401-0", descricao: "TEL CTS-APL 65X600", pesoMetro: 2.18 },
    { codigo: "0252-0062-3", descricao: "TEL CTP-APL 90X30 COM PAR PILOTO", pesoMetro: 0.57 },
    { codigo: "0252-0070-4", descricao: "TEL CCE APL ASF 65X3", pesoMetro: 0.108 },
    { codigo: "0252-0177-8", descricao: "TEL CTS-APL 50X200", pesoMetro: 1.025 },
    { codigo: "0252-0288-3", descricao: "CT RP 40X300", pesoMetro: 1.41 },
    { codigo: "0252-0309-3", descricao: "CTP-APL 50X300 PARES", pesoMetro: 1.68 },
    { codigo: "0252-0299-3", descricao: "CTP-APL 50X20 PARES", pesoMetro: 0.155 },
    { codigo: "0252-0300-4", descricao: "CTP-APL 50X30 PARES", pesoMetro: 0.222 },
    { codigo: "0252-0301-5", descricao: "CTP-APL 50X50 PARES", pesoMetro: 0.339 },
    { codigo: "0252-0302-6", descricao: "CTP-APL 50X100 PARES", pesoMetro: 0.614 },
    { codigo: "0352-0080-4", descricao: "TEL CI 50X300", pesoMetro: 1.84 },
    { codigo: "0252-0217-0", descricao: "TEL CTP-APL 50X1200 P PILOTO/ 125MM", pesoMetro: 5.65 },
    { codigo: "0252-0238-3", descricao: "TEL CTP-APL 65X200", pesoMetro: 1.85 },
    { codigo: "0252-0303-7", descricao: "CTP-APL 50X200 PARES", pesoMetro: 1.152 },
    { codigo: "0252-0315-9", descricao: "CCE-APL-ASF 50X6 PARES", pesoMetro: 0.12 },
    { codigo: "0252-0320-4", descricao: "CCI 50X02 PARES", pesoMetro: 0.018 },
    { codigo: "0252-0321-5", descricao: "CCI 50X04 PARES", pesoMetro: 0.022 },
    { codigo: "0252-0395-0", descricao: "TEL CTP-APL 40X150", pesoMetro: 1.0 },
    { codigo: "0252-0060-7", descricao: "TEL CTP-APL 90X20 COM PAR PILOTO", pesoMetro: 1.68 },
    { codigo: "0252-0124-7", descricao: "TEL CTP-APL-SN 50X20", pesoMetro: 0.165 },
    { codigo: "0252-0237-5", descricao: "TEL CTP-APL 65X100", pesoMetro: 0.968 },
    { codigo: "0252-0253-7", descricao: "TEL CTP-PCM-G 65X50", pesoMetro: 0.775 },
    { codigo: "0252-0305-9", descricao: "CTP-APL 40X20 PARES", pesoMetro: 0.122 },
    { codigo: "0252-0306-0", descricao: "CTP-APL 40X30 PARES", pesoMetro: 0.162 },
    { codigo: "0252-0307-1", descricao: "CTP-APL 40X50 PARES", pesoMetro: 0.252 },
    { codigo: "0252-0310-4", descricao: "CTP-APL 50X400 PARES", pesoMetro: 2.17 },
    { codigo: "0252-0345-2", descricao: "CTP-APL 50X10 PARES", pesoMetro: 0.105 },
    { codigo: "0252-0352-2", descricao: "TEL CTS-APL 40X200", pesoMetro: 0.692 },
    { codigo: "0352-0077-4", descricao: "TEL CI 50X50", pesoMetro: 0.365 },
    { codigo: "0252-0361-1", descricao: "TEL CT RP 50X900", pesoMetro: 8.91 },
    { codigo: "0352-0009-0", descricao: "TEL CI 40X100 COM PAR PILOTO", pesoMetro: 0.49 },
    { codigo: "0352-0010-3", descricao: "TEL CI 40X200 COM PAR PILOTO", pesoMetro: 0.95 },
    { codigo: "0352-0011-1", descricao: "TEL CI 40X300 COM PAR PILOTO", pesoMetro: 1.45 },
    { codigo: "8252-0007-5", descricao: "TELEFONICO DIVERSOS", pesoMetro: 3.18 },
    { codigo: "0252-0313-7", descricao: "CTS-APL-G 50X900 PARES", pesoMetro: 1.025 },
    { codigo: "0252-0243-0", descricao: "TEL CTP-APL 90X100", pesoMetro: 1.822 },
    { codigo: "0252-0316-0", descricao: "CTP-APL 40X200 PARES", pesoMetro: 0.77 },
    { codigo: "0252-0292-4", descricao: "CT-RP EXTRA GROSSO", pesoMetro: 8.43 },
    { codigo: "0252-0308-2", descricao: "CTP-APL 40X100 PARES", pesoMetro: 0.414 },
    { codigo: "0252-0229-4", descricao: "TEL CTP-APL 50X50", pesoMetro: 0.339 },
    { codigo: "0252-0228-6", descricao: "TEL CTP-APL 50X30", pesoMetro: 0.222 },
    { codigo: "0252-0324-8", descricao: "CCE-APL 50X5 PARES (S/ LOTE)", pesoMetro: 0.067 },
    { codigo: "0252-0239-1", descricao: "TEL CTP-APL 65X20 P PILOTO/ 125MM", pesoMetro: 6.67 },
    { codigo: "0252-0339-3", descricao: "CTP-APL-AC 50X100 PARES", pesoMetro: 0.56 },
    { codigo: "0252-0340-4", descricao: "CTP-APL-AC 50X200 PARES", pesoMetro: 1.09 },
    { codigo: "0252-0250-2", descricao: "TEL CTP-APL-G 65X100", pesoMetro: 1.27 },
    { codigo: "0252-0355-5", descricao: "TEL CT RP 50X50", pesoMetro: 1.176 },
    { codigo: "0352-0007-3", descricao: "TEL CI 40X30 COM PAR PILOTO", pesoMetro: 0.152 },
    { codigo: "8252-0019-9", descricao: "CT-APL EXTRA GROSSO 50X1200", pesoMetro: 5.65 },
    { codigo: "8252-0041-5", descricao: "CT-APL EXTRA GROSSO 65X600", pesoMetro: 4.76 },
    { codigo: "8252-0067-9", descricao: "CT-APL GROSSO 40X600", pesoMetro: 1.97 },
    { codigo: "8252-0082-0", descricao: "CT-APL EXTRA GROSSO 40X1200", pesoMetro: 3.74 },
    { codigo: "8252-0083-0", descricao: "CT-APL EXTRA GROSSO 40X1800", pesoMetro: 5.48 },
    { codigo: "8252-0085-7", descricao: "CT-APL GROSSO 40X900", pesoMetro: 2.88 },
    { codigo: "8252-0093-8", descricao: "CT-APL MEDIO 40X300", pesoMetro: 1.06 },
    { codigo: "8252-0097-0", descricao: "CTP-APL EXTRA GROSSO 40X1200", pesoMetro: 3.71 },
    { codigo: "8252-0099-7", descricao: "CTP-APL EXTRA GROSSO 40X1800", pesoMetro: 5.51 },
    { codigo: "8252-0100-4", descricao: "CTP-APL EXTRA GROSSO 40X2400", pesoMetro: 7.58 },
    { codigo: "8252-0101-2", descricao: "CTP-APL EXTRA GROSSO 50X1200", pesoMetro: 5.65 },
    { codigo: "8252-0107-1", descricao: "CTP-APL FINO 40X100", pesoMetro: 0.367 },
    { codigo: "8252-0108-0", descricao: "CTP-APL FINO 40X20", pesoMetro: 0.122 },
    { codigo: "8252-0109-8", descricao: "CTP-APL FINO 40X30", pesoMetro: 0.162 },
    { codigo: "8252-0110-1", descricao: "CTP-APL FINO 40X50", pesoMetro: 0.252 },
    { codigo: "8252-0117-9", descricao: "CTP-APL FINO 50X30", pesoMetro: 0.222 },
    { codigo: "8252-0120-9", descricao: "CTP-APL FINO 50X50", pesoMetro: 0.339 },
    { codigo: "8252-0138-1", descricao: "CTP-APL GROSSO 40X600", pesoMetro: 1.94 },
    { codigo: "8252-0147-0", descricao: "CTP-APL MEDIO 40X200", pesoMetro: 0.77 },
    { codigo: "8252-0148-9", descricao: "CTP-APL MEDIO 40X300", pesoMetro: 0.989 },
    { codigo: "8252-0149-7", descricao: "CTP-APL MEDIO 40X400", pesoMetro: 1.27 },
    { codigo: "8252-0151-9", descricao: "CTP-APL MEDIO 50X100", pesoMetro: 0.565 },
    { codigo: "8252-0152-7", descricao: "CTP-APL MEDIO 50X200", pesoMetro: 1.06 },
    { codigo: "8252-0153-5", descricao: "CTP-APL MEDIO 50X300", pesoMetro: 1.51 },
    { codigo: "8252-0189-6", descricao: "CTP-CI GROSSO 50X600", pesoMetro: 2.91 },
    { codigo: "8252-0199-3", descricao: "CT-RP EXTRA GROSSO 40X1800", pesoMetro: 11.82 },
    { codigo: "8252-0200-0", descricao: "CT-RP EXTRA GROSSO 40X2400", pesoMetro: 15.07 },
    { codigo: "8252-0225-6", descricao: "TEL CTS-APL EXGROSSO 40X1800", pesoMetro: 5.5 },
    { codigo: "8252-0226-4", descricao: "TEL CTS-APL EXGROSSO 40X2400", pesoMetro: 7.22 },
    { codigo: "8252-0230-2", descricao: "TEL CTS-APL GROSSO 40X600", pesoMetro: 1.91 }
];

const valorPorKg = 33.00; 
let registros = [];

// 2. Carregar e Filtrar o Dropdown (MUDANÇA AQUI: Só mostra descrição)
function carregarCabos(termoFiltro = '') {
    const selectCabo = document.getElementById('cabo');
    
    selectCabo.innerHTML = '<option value="">Selecione um cabo...</option>';
    
    const termo = termoFiltro.toLowerCase();
    
    const cabosFiltrados = catalogoCabos.filter(cabo => {
        return cabo.descricao.toLowerCase().includes(termo) || cabo.codigo.toLowerCase().includes(termo);
    });

    cabosFiltrados.forEach(cabo => {
        let option = document.createElement('option');
        option.value = cabo.codigo;
        // Agora mostra SOMENTE A DESCRIÇÃO na tela do App
        option.text = `${cabo.descricao} (${cabo.pesoMetro} kg/m)`; 
        selectCabo.appendChild(option);
    });
}

document.getElementById('busca-cabo').addEventListener('input', function(e) {
    carregarCabos(e.target.value);
});

window.onload = function() {
    carregarCabos();
};

// 3. Função para calcular e salvar o registro
function adicionarRegistro() {
    const obra = document.getElementById('obra').value;
    const lote = document.getElementById('lote').value;
    const codigoCabo = document.getElementById('cabo').value;
    const comprimento = parseFloat(document.getElementById('comprimento').value);

    if (!obra || !lote || !codigoCabo || isNaN(comprimento)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const caboSelecionado = catalogoCabos.find(c => c.codigo === codigoCabo);
    const pesoTotal = comprimento * caboSelecionado.pesoMetro;
    const custoTotal = pesoTotal * valorPorKg; 

    // Salvando código em background para o Excel e Relatório
    const novoRegistro = {
        obra: obra,
        lote: lote,
        codigo: caboSelecionado.codigo,  // Adicionado
        descricao: caboSelecionado.descricao, // Só a descrição para a tabela na tela
        comprimento: comprimento,
        pesoTotal: pesoTotal,
        custoTotal: custoTotal
    };

    registros.push(novoRegistro);
    atualizarTabela();
    
    document.getElementById('comprimento').value = '';
    document.getElementById('cabo').value = '';
    document.getElementById('busca-cabo').value = ''; 
    carregarCabos(); 
}

// 4. Atualizar a tabela visual (Mantém apenas a Descrição)
function atualizarTabela() {
    const tbody = document.querySelector('#tabela-registros tbody');
    tbody.innerHTML = ''; 

    registros.forEach(reg => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${reg.obra}</td>
            <td>${reg.lote}</td>
            <td>${reg.descricao}</td>
            <td>${reg.comprimento.toFixed(2)}</td>
            <td>${reg.pesoTotal.toFixed(2)}</td>
            <td>R$ ${reg.custoTotal.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });
}

// 5. Gerar Relatório Consolidado (MUDANÇA AQUI: Mostra Código + Descrição)
function gerarRelatorio() {
    if (registros.length === 0) {
        alert("Não há registros para consolidar.");
        return;
    }

    const obraAtual = document.getElementById('obra').value || registros[0].obra;
    const registrosObra = registros.filter(r => r.obra === obraAtual);
    
    let totalMetrosGeral = 0;
    let totalPesoGeral = 0;
    let totalCustoGeral = 0;
    let resumoPorCabo = {};

    // Agrupa pela Chave do Código
    registrosObra.forEach(reg => {
        totalMetrosGeral += reg.comprimento;
        totalPesoGeral += reg.pesoTotal;
        totalCustoGeral += reg.custoTotal;

        if (!resumoPorCabo[reg.codigo]) {
            resumoPorCabo[reg.codigo] = { descricao: reg.descricao, metros: 0, peso: 0, custo: 0 };
        }
        resumoPorCabo[reg.codigo].metros += reg.comprimento;
        resumoPorCabo[reg.codigo].peso += reg.pesoTotal;
        resumoPorCabo[reg.codigo].custo += reg.custoTotal;
    });

    let html = `<h3>Obra: ${obraAtual}</h3>`;
    html += `<div class="summary-box">
                <strong>TOTAIS GERAIS DA OBRA:</strong><br>
                Metragem Total: ${totalMetrosGeral.toFixed(2)} m<br>
                Peso Total: ${totalPesoGeral.toFixed(2)} kg<br>
                Custo Total Estimado: R$ ${totalCustoGeral.toFixed(2)}
             </div>`;
    
    html += `<h4>Resumo por Tipo de Cabo:</h4><ul>`;
    for (const [codigo, totais] of Object.entries(resumoPorCabo)) {
        // Exibe Código e Descrição no Relatório Final da Tela
        html += `<li><strong>${codigo} - ${totais.descricao}:</strong> ${totais.metros.toFixed(2)} m | ${totais.peso.toFixed(2)} kg | R$ ${totais.custo.toFixed(2)}</li>`;
    }
    html += `</ul>`;

    document.getElementById('relatorio-content').innerHTML = html;
    
    document.getElementById('form-section').classList.add('hidden');
    // Para ocultar a tabela ao gerar o relatório conforme sugerido no index HTML antes
    document.getElementById('tabela-section').classList.add('hidden'); 
    document.getElementById('relatorio-section').classList.remove('hidden');
}

function voltar() {
    document.getElementById('relatorio-section').classList.add('hidden');
    document.getElementById('form-section').classList.remove('hidden');
    document.getElementById('tabela-section').classList.remove('hidden');
}

// 6. Gerar e Baixar o Excel (MUDANÇA AQUI: Exporta Código e Descrição)
function baixarExcel() {
    if (registros.length === 0) {
        alert("Não há registros para exportar.");
        return;
    }

    const obraAtual = document.getElementById('obra').value || registros[0].obra;
    const registrosObra = registros.filter(r => r.obra === obraAtual);

    const dadosExcel = registrosObra.map(reg => ({
        "Obra": reg.obra,
        "Lote": reg.lote,
        "Código": reg.codigo,             // Incluído na planilha Excel
        "Descrição": reg.descricao,       // Incluído na planilha Excel
        "Metragem (m)": reg.comprimento,
        "Peso Estimado (kg)": reg.pesoTotal,
        "Custo Estimado (R$)": reg.custoTotal
    }));

    let totalMetros = 0, totalPeso = 0, totalCusto = 0;
    registrosObra.forEach(reg => {
        totalMetros += reg.comprimento;
        totalPeso += reg.pesoTotal;
        totalCusto += reg.custoTotal;
    });

    dadosExcel.push({}); // Linha em branco
    dadosExcel.push({
        "Obra": "TOTAIS DA OBRA",
        "Lote": "-",
        "Código": "-",
        "Descrição": "-",
        "Metragem (m)": totalMetros,
        "Peso Estimado (kg)": totalPeso,
        "Custo Estimado (R$)": totalCusto
    });

    const worksheet = XLSX.utils.json_to_sheet(dadosExcel);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Relatório Desmobilização");

    XLSX.writeFile(workbook, `Desmobilizacao_Cabos_${obraAtual}.xlsx`);
}