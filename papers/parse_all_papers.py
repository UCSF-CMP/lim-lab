from os import listdir

mypath = "."

from os.path import isfile, join
onlyfiles = [ f for f in listdir(mypath) if isfile(join(mypath,f)) ]

for f in onlyfiles: 
	if ".html" in f: 
		print(f)
		with open(f) as html: 
			if (f.split(".html")[0] + ".jade") not in onlyfiles: 
				with open(f.split(".html")[0] + ".jade", 'w') as o: 
					at_content = False
					o.write("""extends ./papers.jade
block content
""")
					for line in html: 
						if at_content: 
							if "</div>" in line: 
								at_content = False
							elif line.split() != []: 
								o.write("\t| " + line)
						else: 
							print(line)
						if '<img src="papers.gif" id="heading">' in line: 
							at_content = True