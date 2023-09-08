import AudioTable from "../Component/AudioTable";
import {TheadMetaType } from "../Component/Type";

import content0 from './wav/t1/0_0_content.wav';
import reference0 from './wav/t1/0_1_reference.wav';
import amatch0 from './wav/t1/0_2_a-match.wav';
import voicefixer0 from './wav/t1/0_4_voicefixer.wav';
import ours0 from './wav/t1/0_5_ours.wav';
import target0 from './wav/t1/0_6_target.wav';

import content1 from './wav/t1/1_0_content.wav';
import reference1 from './wav/t1/1_1_reference.wav';
import amatch1 from './wav/t1/1_2_a-match.wav';
import voicefixer1 from './wav/t1/1_4_voicefixer.wav';
import ours1 from './wav/t1/1_5_ours.wav';
import target1 from './wav/t1/1_6_target.wav';

import content2 from './wav/t1/2_0_content.wav';
import reference2 from './wav/t1/2_1_reference.wav';
import amatch2 from './wav/t1/2_2_a-match.wav';
import voicefixer2 from './wav/t1/2_4_voicefixer.wav';
import ours2 from './wav/t1/2_5_ours.wav';
import target2 from './wav/t1/2_6_target.wav';

import content3 from './wav/t1/3_0_content.wav';
import reference3 from './wav/t1/3_1_reference.wav';
import amatch3 from './wav/t1/3_2_a-match.wav';
import voicefixer3 from './wav/t1/3_4_voicefixer.wav';
import ours3 from './wav/t1/3_5_ours.wav';
import target3 from './wav/t1/3_6_target.wav';

import content4 from './wav/t1/4_0_content.wav';
import reference4 from './wav/t1/4_1_reference.wav';
import amatch4 from './wav/t1/4_2_a-match.wav';
import voicefixer4 from './wav/t1/4_4_voicefixer.wav';
import ours4 from './wav/t1/4_5_ours.wav';
import target4 from './wav/t1/4_6_target.wav';

import content5 from './wav/t1/5_0_content.wav';
import reference5 from './wav/t1/5_1_reference.wav';
import amatch5 from './wav/t1/5_2_a-match.wav';
import voicefixer5 from './wav/t1/5_4_voicefixer.wav';
import ours5 from './wav/t1/5_5_ours.wav';
import target5 from './wav/t1/5_6_target.wav';

import content6 from './wav/t1/6_0_content.wav';
import reference6 from './wav/t1/6_1_reference.wav';
import amatch6 from './wav/t1/6_2_a-match.wav';
import voicefixer6 from './wav/t1/6_4_voicefixer.wav';
import ours6 from './wav/t1/6_5_ours.wav';
import target6 from './wav/t1/6_6_target.wav';

import content7 from './wav/t1/7_0_content.wav';
import reference7 from './wav/t1/7_1_reference.wav';
import amatch7 from './wav/t1/7_2_a-match.wav';
import voicefixer7 from './wav/t1/7_4_voicefixer.wav';
import ours7 from './wav/t1/7_5_ours.wav';
import target7 from './wav/t1/7_6_target.wav';

import content8 from './wav/t1/8_0_content.wav';
import reference8 from './wav/t1/8_1_reference.wav';
import amatch8 from './wav/t1/8_2_a-match.wav';
import voicefixer8 from './wav/t1/8_4_voicefixer.wav';
import ours8 from './wav/t1/8_5_ours.wav';
import target8 from './wav/t1/8_6_target.wav';

import content9 from './wav/t1/9_0_content.wav';
import reference9 from './wav/t1/9_1_reference.wav';
import amatch9 from './wav/t1/9_2_a-match.wav';
import voicefixer9 from './wav/t1/9_4_voicefixer.wav';
import ours9 from './wav/t1/9_5_ours.wav';
import target9 from './wav/t1/9_6_target.wav';

export default function EnvToClean(){
  const theadMetaArray: Array<TheadMetaType> = [
    {name:'Content', description:'', color:'#4D97EF' },
    {name:'Reference', description:'', color:'#4D97EF' },
    {name:'A-Match', description:'', color:'#C00909' },
    {name:'VoiceFixer', description:'', color:'#C00909' },
    {name:'DiffRENT', description:'(proposed)', color:'#EF7E4D' },
    {name:'Target', description:'', color:'#449948' }
  ]
  const tableAudio:Array<Array<any>>  = [ [content0,reference0,amatch0,voicefixer0,ours0,target0],
                                          [content1,reference1,amatch1,voicefixer1,ours1,target1],
                                          [content2,reference2,amatch2,voicefixer2,ours2,target2],
                                          [content3,reference3,amatch3,voicefixer3,ours3,target3],
                                          [content4,reference4,amatch4,voicefixer4,ours4,target4],
                                          [content5,reference5,amatch5,voicefixer5,ours5,target5],
                                          [content6,reference6,amatch6,voicefixer6,ours6,target6],
                                          [content7,reference7,amatch7,voicefixer7,ours7,target7],
                                          [content8,reference8,amatch8,voicefixer8,ours8,target8],
                                          [content9,reference9,amatch9,voicefixer9,ours9,target9],

                                        ]
  return (
        <AudioTable tableName='Env-to-Clean' theadMetaArray={theadMetaArray} tableAudio={tableAudio} audioWidth={'150px'}/>
  )
}
