// Update this file any time a new program contract has been deployed
type ProgramParams = {
  programImplementationContract: string;
  programFactoryContract: string;
};

type DeployParams = Record<string, ProgramParams>;

export const programParams: DeployParams = {
  goerli: {
    programImplementationContract: '0x6D22c31ea600E3846B6675a0c0427505Cd2BDF7e',
    programFactoryContract: '0x13B2dE16723173389377BE398E1b0EAc3f017a45'
  },
};