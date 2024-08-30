import AudioTable from "../Component/AudioTable";
import {TheadMetaType } from "../Component/Type";

import content0 from './wav/t2/0_0_content.wav';
import reference0 from './wav/t2/0_1_reference.wav';
import amatch0 from './wav/t2/0_2_a-match.wav';
import ours0 from './wav/t2/0_5_ours.wav';
import target0 from './wav/t2/0_6_target.wav';

import content1 from './wav/t2/1_0_content.wav';
import reference1 from './wav/t2/1_1_reference.wav';
import amatch1 from './wav/t2/1_2_a-match.wav';
import ours1 from './wav/t2/1_5_ours.wav';
import target1 from './wav/t2/1_6_target.wav';

import content2 from './wav/t2/2_0_content.wav';
import reference2 from './wav/t2/2_1_reference.wav';
import amatch2 from './wav/t2/2_2_a-match.wav';
import ours2 from './wav/t2/2_5_ours.wav';
import target2 from './wav/t2/2_6_target.wav';

import content3 from './wav/t2/3_0_content.wav';
import reference3 from './wav/t2/3_1_reference.wav';
import amatch3 from './wav/t2/3_2_a-match.wav';
import ours3 from './wav/t2/3_5_ours.wav';
import target3 from './wav/t2/3_6_target.wav';

import content4 from './wav/t2/4_0_content.wav';
import reference4 from './wav/t2/4_1_reference.wav';
import amatch4 from './wav/t2/4_2_a-match.wav';
import ours4 from './wav/t2/4_5_ours.wav';
import target4 from './wav/t2/4_6_target.wav';

import content5 from './wav/t2/5_0_content.wav';
import reference5 from './wav/t2/5_1_reference.wav';
import amatch5 from './wav/t2/5_2_a-match.wav';
import ours5 from './wav/t2/5_5_ours.wav';
import target5 from './wav/t2/5_6_target.wav';

import content6 from './wav/t2/6_0_content.wav';
import reference6 from './wav/t2/6_1_reference.wav';
import amatch6 from './wav/t2/6_2_a-match.wav';
import ours6 from './wav/t2/6_5_ours.wav';
import target6 from './wav/t2/6_6_target.wav';

import content7 from './wav/t2/7_0_content.wav';
import reference7 from './wav/t2/7_1_reference.wav';
import amatch7 from './wav/t2/7_2_a-match.wav';
import ours7 from './wav/t2/7_5_ours.wav';
import target7 from './wav/t2/7_6_target.wav';

import content8 from './wav/t2/8_0_content.wav';
import reference8 from './wav/t2/8_1_reference.wav';
import amatch8 from './wav/t2/8_2_a-match.wav';
import ours8 from './wav/t2/8_5_ours.wav';
import target8 from './wav/t2/8_6_target.wav';

import content9 from './wav/t2/9_0_content.wav';
import reference9 from './wav/t2/9_1_reference.wav';
import amatch9 from './wav/t2/9_2_a-match.wav';
import ours9 from './wav/t2/9_5_ours.wav';
import target9 from './wav/t2/9_6_target.wav';

export default function CleanToEnv(){
  const theadMetaArray: Array<TheadMetaType> = [
    {name:'Content', miniTopDescription:'',description:'', color:'#4D97EF' },
    {name:'Reference',miniTopDescription:'', description:'', color:'#4D97EF' },
    {name:'A-Match [1]',miniTopDescription:'', description:'', color:'#C00909' },
    {name:'DiffRENT',miniTopDescription:'[U-R2-C]', description:'(proposed)', color:'#EF7E4D' },
    {name:'Target',miniTopDescription:'', description:'', color:'#449948' }
  ]
  const tableAudio:Array<Array<any>>  = [ 
    [content2,reference2,amatch2,ours2,target2],
    [content3,reference3,amatch3,ours3,target3],
    [content0,reference0,amatch0,ours0,target0],
    [content1,reference1,amatch1,ours1,target1],
    [content4,reference4,amatch4,ours4,target4],
    [content5,reference5,amatch5,ours5,target5],
    [content6,reference6,amatch6,ours6,target6],
    [content7,reference7,amatch7,ours7,target7],
    [content8,reference8,amatch8,ours8,target8],
    [content9,reference9,amatch9,ours9,target9],
  ]
  return (
        <AudioTable tableName='Clean-to-Env (2/3)' theadMetaArray={theadMetaArray} tableAudio={tableAudio} audioWidth={'180px'}/>
  )
}
