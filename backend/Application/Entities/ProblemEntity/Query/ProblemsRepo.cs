using System.Collections.Generic;
using System.IO;

namespace Application.Entities.ProblemEntity.Query
{
    public class ProblemsRepo
    {
        
        public ICollection<object> getCsv() {
            var initialDir = "../Persistence/data/";
            var path = Path.Combine(Path.GetFullPath($"{initialDir}idea.csv"));

            var dataList = new List<object>();

            using (var streamReader = System.IO.File.OpenText(path))
            {
                while (!streamReader.EndOfStream)
                {
                    var line = streamReader.ReadLine();
                    var data = line.Split('|');
                    dataList.Add(data);
                }
            }

            return dataList;
        }
    }
}