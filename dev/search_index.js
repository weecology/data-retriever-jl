var documenterSearchIndex = {"docs":
[{"location":"CODE_OF_CONDUCT/#Contributor-Covenant-Code-of-Conduct-1","page":"Code of Conduct","title":"Contributor Covenant Code of Conduct","text":"","category":"section"},{"location":"CODE_OF_CONDUCT/#Our-Pledge-1","page":"Code of Conduct","title":"Our Pledge","text":"","category":"section"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.","category":"page"},{"location":"CODE_OF_CONDUCT/#Our-Standards-1","page":"Code of Conduct","title":"Our Standards","text":"","category":"section"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"Examples of behavior that contributes to creating a positive environment include:","category":"page"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"Using welcoming and inclusive language\nBeing respectful of differing viewpoints and experiences\nGracefully accepting constructive criticism\nFocusing on what is best for the community\nShowing empathy towards other community members","category":"page"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"Examples of unacceptable behavior by participants include:","category":"page"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"The use of sexualized language or imagery and unwelcome sexual attention or advances\nTrolling, insulting/derogatory comments, and personal or political attacks\nPublic or private harassment\nPublishing others' private information, such as a physical or electronic address, without explicit permission\nOther conduct which could reasonably be considered inappropriate in a professional setting","category":"page"},{"location":"CODE_OF_CONDUCT/#Our-Responsibilities-1","page":"Code of Conduct","title":"Our Responsibilities","text":"","category":"section"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.","category":"page"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.","category":"page"},{"location":"CODE_OF_CONDUCT/#Scope-1","page":"Code of Conduct","title":"Scope","text":"","category":"section"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.","category":"page"},{"location":"CODE_OF_CONDUCT/#Enforcement-1","page":"Code of Conduct","title":"Enforcement","text":"","category":"section"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [INSERT EMAIL ADDRESS]. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.","category":"page"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.","category":"page"},{"location":"CODE_OF_CONDUCT/#Attribution-1","page":"Code of Conduct","title":"Attribution","text":"","category":"section"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4, available at https://www.contributor-covenant.org/version/1/4/code-of-conduct/","category":"page"},{"location":"CODE_OF_CONDUCT/#","page":"Code of Conduct","title":"Code of Conduct","text":"[homepage]: https://www.contributor-covenant.org","category":"page"},{"location":"intro/#Retriever-1","page":"Home","title":"Retriever","text":"","category":"section"},{"location":"intro/#","page":"Home","title":"Home","text":"Julia wrapper for the Data Retriever software.","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"Data Retriever automates the tasks of finding, downloading, and cleaning up publicly available data, and then stores them in a local database or as .csv files. Simply put, it's a package manager for data. This allows data analysts to spend a majority of their time in analysing rather than in cleaning up or managing data.","category":"page"},{"location":"intro/#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"intro/#","page":"Home","title":"Home","text":"To use Retriever, you first need to install Retriever, a core python package.","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"To install Retriever using the Julia package manager","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"\njulia> Pkg.add(\"Retriever\")\n","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"To install from Source, download or checkout the source from the github page.","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"Go to Retriever.jl/src. Run Julia.","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"\njulia> include(\"Retriever.jl\")\n","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"To create docs","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"julia --color=yes make.jl\n","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"or simply","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"\njulia make.jl\n","category":"page"},{"location":"intro/#","page":"Home","title":"Home","text":"(Note: If you want help in installing Julia you can follow this tutorial","category":"page"},{"location":"developer/#Developer-documentation-for-Retriever-Julia-package-1","page":"Developer's Guide","title":"Developer documentation for Retriever Julia package","text":"","category":"section"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"Before you begin, make sure you have the retriever python package installed","category":"page"},{"location":"developer/#ALL-required-packeges-1","page":"Developer's Guide","title":"ALL required packeges","text":"","category":"section"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"These packages will be installed once the Retriever.jl package is installed","category":"page"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"Pycall Compat DocStringExtensions Documenter","category":"page"},{"location":"developer/#PyCall-1","page":"Developer's Guide","title":"PyCall","text":"","category":"section"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"Pycall julia is used to communicate with the retriever python package objects.","category":"page"},{"location":"developer/#Documenter-1","page":"Developer's Guide","title":"Documenter","text":"","category":"section"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"Documenter tool is used for building documentation To test the documentations locally, install the current source","category":"page"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"\njulia> include(\"src/Retriever.jl\")\n","category":"page"},{"location":"developer/#Tests-1","page":"Developer's Guide","title":"Tests","text":"","category":"section"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"The tests are performed in two fold We test the python core functions, and then followed by the julia core functions.","category":"page"},{"location":"developer/#Register-and-Release-Retriever-1","page":"Developer's Guide","title":"Register and Release Retriever","text":"","category":"section"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"\njulia> ENV[\"PYTHON\"]=\"Python path where retriever python package is installed\"\njulia> Pkg.build(\"PyCall\")\njulia> Pkg.add(\"PyCall\")\njulia> Pkg.test(\"Retriever\")\njulia> Pkg.update()\njulia> Pkg.add(\"PkgDev\")\njulia> using  PkgDev\n","category":"page"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"\njulia> PkgDev.register(\"Retriever\")\nINFO: Registering Retriever at https://github.com/weecology/Retriever.jl.git\nINFO: Committing METADATA for Retriever\n","category":"page"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"\njulia> PkgDev.tag(\"Retriever\")\nINFO: Tagging Retriever v0.0.1\n","category":"page"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"\njulia> PkgDev.config()\nPkgDev.jl configuration:\nUser name: provide git user name\nUser email: provide git associated email\nEnter GitHub user [Defualt name]:\nDo you want to change this configuration? [N]:N\n","category":"page"},{"location":"developer/#","page":"Developer's Guide","title":"Developer's Guide","text":"\njulia> PkgDev.publish()\nINFO: Validating METADATA\nINFO: Creating a personal access token for Julia Package Manager on GitHub.\n\tYou will be asked to provide credentials to your GitHub account.\n\n...Git Credential authentication\n\nINFO: Pushing Retriever permanent tags: v0.0.1\nINFO: Submitting METADATA changes\nINFO: Forking JuliaLang/METADATA.jl to henrykironde\nINFO: Pushing changes as branch pull-request/ceea745c\nINFO: To create a pull-request, open:\n\n  https://[link to the Branch created]\n","category":"page"},{"location":"lib/public/#Command-Documentation-1","page":"Command Documentation","title":"Command Documentation","text":"","category":"section"},{"location":"lib/public/#Index-1","page":"Command Documentation","title":"Index","text":"","category":"section"},{"location":"lib/public/#","page":"Command Documentation","title":"Command Documentation","text":"Pages = [\"public.md\"]","category":"page"},{"location":"lib/public/#","page":"Command Documentation","title":"Command Documentation","text":"Modules = [Retriever]","category":"page"},{"location":"lib/public/#Main.Retriever.check_for_updates-Tuple{}","page":"Command Documentation","title":"Main.Retriever.check_for_updates","text":"    check_for_updates()\n\nCheck Retriever scripts for updates.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.commit","page":"Command Documentation","title":"Main.Retriever.commit","text":"    commit(dataset, commit_message::String=\"\", path::String=\"\", quiet::Bool=false)\n\nCommit Retriever dataset.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Main.Retriever.commit_log-Tuple{Any}","page":"Command Documentation","title":"Main.Retriever.commit_log","text":"    commit_log(dataset)\n\nGet the commit log for a dataset.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.dataset_names-Tuple{}","page":"Command Documentation","title":"Main.Retriever.dataset_names","text":"    dataset_names()\n\nReturn list of all available dataset names.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.download-Tuple{Any}","page":"Command Documentation","title":"Main.Retriever.download","text":"    download(dataset; path::String=\"./\", quiet::Bool=false,\n                subdir::String=\"\", debug::Bool=false, use_cache::Bool=false)\n\nDownload scripts for retriever.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.get_dataset_names_upstream","page":"Command Documentation","title":"Main.Retriever.get_dataset_names_upstream","text":"    get_dataset_names_upstream(keywords::Array{String,1}=String[], licenses::Array{String,1}=String[], repo::String=\"\")\n\nGet dataset names upstream scripts.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Main.Retriever.get_script_upstream","page":"Command Documentation","title":"Main.Retriever.get_script_upstream","text":"    get_script_upstream(dataset, repo::String=\"\")\n\nGet upstream retriever-recipe's scripts.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Main.Retriever.install_csv-Tuple{Any}","page":"Command Documentation","title":"Main.Retriever.install_csv","text":"\n    install_csv(dataset; table_name::String=\"\", compile::Bool=false,\n        data_dir=pwd(), debug::Bool=false, use_cache::Bool=true)\n\nInstall Retriever scripts in csv format.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.install_json-Tuple{Any}","page":"Command Documentation","title":"Main.Retriever.install_json","text":"    install_json(dataset; table_name::String=\"\", data_dir=pwd(),\n    debug::Bool=false, use_cache::Bool=true)\n\nInstall Retriever scripts in json format.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.install_msaccess-Tuple{Any}","page":"Command Documentation","title":"Main.Retriever.install_msaccess","text":"    install_msaccess(dataset; file::String=\"\", table_name::String=\"\",\n                data_dir=pwd(), debug::Bool=false, use_cache::Bool=true)\n\nInstall Retriever scripts in msacces.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.install_mysql-Tuple{Any}","page":"Command Documentation","title":"Main.Retriever.install_mysql","text":"    install_mysql(dataset; user::String=\"root\",\n                password::String=\"\", host::String=\"localhost\",\n                port::Int=3306, database_name::String=\"\", table_name::String=\"\",\n                compile::Bool=false, debug::Bool=false, quiet::Bool=false,\n                use_cache::Bool=true)\n\nInstall Retriever scripts in mysql database.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.install_postgres-Tuple{Any}","page":"Command Documentation","title":"Main.Retriever.install_postgres","text":"    install_postgres(dataset; user::String=\"postgres\",\n                password::String=\"\", host::String=\"localhost\",\n                port::Int=5432, database::String=\"postgres\",\n                database_name::String=\"\", table_name::String=\"\", bbox::Any=[],\n                debug::Bool=false, use_cache::Bool=true)\n\nInstall Retriever scripts in database.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.install_sqlite-Tuple{Any}","page":"Command Documentation","title":"Main.Retriever.install_sqlite","text":"    install_sqlite(dataset; file::String=\"\", table_name::String=\"\",\n                data_dir=pwd(), debug::Bool=false,\n                use_cache::Bool=true)\n\nInstall Retriever scripts in database.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.install_xml-Tuple{Any}","page":"Command Documentation","title":"Main.Retriever.install_xml","text":"    install_xml(dataset; table_name::String=\"\", compile::Bool=false, data_dir=pwd(), \n            debug::Bool=false, use_cache::Bool=true)\n\nInstall Retriever scripts in xml format.\n\n\n\n\n\n","category":"method"},{"location":"lib/public/#Main.Retriever.reset_retriever","page":"Command Documentation","title":"Main.Retriever.reset_retriever","text":"    reset_retriever(scope::String=\"all\", ask_permission::Bool=true)\n\nRetriever reset scripts or data or all.\n\n\n\n\n\n","category":"function"},{"location":"lib/public/#Main.Retriever.reload_scripts-Tuple{}","page":"Command Documentation","title":"Main.Retriever.reload_scripts","text":"    reload_scripts()\n\nRetriever reload scripts.\n\n\n\n\n\n","category":"method"},{"location":"#Retriever-Documentation-1","page":"Source","title":"Retriever Documentation","text":"","category":"section"},{"location":"#","page":"Source","title":"Source","text":"Documentation for Retriever.jl's interface.","category":"page"},{"location":"#Modules-1","page":"Source","title":"Modules","text":"","category":"section"},{"location":"#","page":"Source","title":"Source","text":"Pages = [\"lib/public.md\"]","category":"page"},{"location":"tutorial/#Data-Retriever-using-Julia-1","page":"Installation Guide","title":"Data Retriever using Julia","text":"","category":"section"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"The wrapper module for Data Retriever has been implemented as Retriever. All the functions work and feel the same as the python Retriever module. The module has been created using PyCall hence all the functions are analogous to the functions of Retriever python module.","category":"page"},{"location":"tutorial/#Installation-1","page":"Installation Guide","title":"Installation","text":"","category":"section"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"To use Retriever, you first need to install the core Python retriever package. The simplest way to do this is to let Julia install it into an isolated Python environment by setting an environmental variable prior to installation:","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"julia> ENV[\"PYTHON\"]=\"\"\njulia> Pkg.add(\"Retriever\")","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Alternatively you can install it yourself using either conda or pip (Python's package managers) which will also provide access to the package in Python and the command line interface.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"conda install -c conda-forge retriever","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"pip install retriever","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Then install the Julia package without setting the environmental variable:","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> Pkg.add(\"Retriever\")\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"To install from Source, download or checkout the source from the github page.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Go to Retriever.jl/src. Run Julia.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> include(\"Retriever.jl\")\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"(Note: If you want help in installing Julia you can follow this tutorial","category":"page"},{"location":"tutorial/#Tutorial-1","page":"Installation Guide","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"The Retriever has both built-in and recipe scripts. The Retriever's built-in scripts as part of the installation. Each recipe provides the information to retriever on how to install a dataset.  Recipes are contributed by a variety of users including data owners, data users, and the Retriever maintainers.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Get list of all the available datasets in Retriever.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    \"\"\" Function Definition \"\"\"\n    function dataset_names()\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> Retriever.dataset_names()\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Updating scripts to the latest version.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    \"\"\" Function Definition \"\"\"\n    function check_for_updates()\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> Retriever.check_for_updates()\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Get list of datasets based on searching by keywords and licenses..","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    \"\"\" Function Definition \"\"\"\n    function get_dataset_names_upstream(keywords::String=\"\", licenses::String=\"\", repo::String=\"\")\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> Retriever.get_dataset_names_upstream(\"birds data\")\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Get the recipe for a specific dataset.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    \"\"\" Function Definition \"\"\"\n    function get_script_upstream(dataset, repo::String=\"\")\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> Retriever.get_script_upstream(\"fia-florida\")\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Reload scripts.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    \"\"\" Function Definition \"\"\"\n    function reload_scripts()\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> Retriever.reload_scripts()\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Delete information stored by Retriever which could be scripts, connections or data.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    \"\"\" Function Definition \"\"\"\n    function reset_retriever(; scope::AbstractString=\"all\")\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    \"\"\" Using default variable all\"\"\"\n    julia> Retriever.reset_retriever()\n    \"\"\" Set scope as scripts \"\"\"\n    julia> Retriever.reset_retriever(scope=\"scripts\")\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"To download datasets the download function can be used.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    \"\"\" Function Definition \"\"\"\n    function download(dataset; path::AbstractString=\"./\", quite::Bool=false,\n                subdir::Bool=false, use_cache::Bool=false, debug::Bool=false)\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> Retriever.download(\"iris\")\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Installing scripts into engines.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    \"\"\" Function Definition \"\"\"\n    function install_csv(dataset; table_name=nothing, compile::Bool=false,\n                debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n\n    function install_mysql(dataset; user::AbstractString=\"root\",\n                password::AbstractString=\"\", host::AbstractString=\"localhost\",\n                port::Int=3306, database_name=nothing, table_name=nothing,\n                compile::Bool=false, debug::Bool=false, quite::Bool=false,\n                use_cache::Bool=true)\n\n    function install_postgres(dataset; user::AbstractString=\"postgres\",\n                password::AbstractString=\"\", host::AbstractString=\"localhost\",\n                port::Int=5432, database::AbstractString=\"postgres\",\n                database_name=nothing, table_name=nothing, compile::Bool=false,\n                debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n\n    function install_sqlite(dataset; file=nothing, table_name=nothing,\n                compile::Bool=false, debug::Bool=false, quite::Bool=false,\n                use_cache::Bool=true)\n\n    function install_msaccess(dataset; file=nothing, table_name=nothing,\n                compile::Bool=false, debug::Bool=false, quite::Bool=false,\n                use_cache::Bool=true)\n\n    function install_json(dataset; table_name=nothing, compile::Bool=false,\n                debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n\n    function install_xml(dataset; table_name=nothing, compile::Bool=false,\n                debug::Bool=false, quite::Bool=false, use_cache::Bool=true)\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> Retriever.install_csv(\"iris\")\n    julia> Retriever.install_mysql(\"iris\")\n    julia> Retriever.install_postgres(\"iris\")\n    julia> Retriever.install_sqlite(\"iris\")\n    julia> Retriever.install_msaccess(\"iris\")\n    julia> Retriever.install_json(\"iris\")\n    julia> Retriever.install_xml(\"iris\")\n","category":"page"},{"location":"tutorial/#Retriever-Provenance-1","page":"Installation Guide","title":"Retriever Provenance","text":"","category":"section"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Retriever allows committing of datasets and installation of the committed dataset into the database of your choice at a later date. This ensures that the previous outputs/results can be produced easily.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"Retriever supports committing of a dataset into a compressed archive.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> Retriever.commit(\"portal\")\n    julia> Retriever.commit('abalone-age', 'First chapter data version 1')\n    julia> Retriever.commit_log(\"portal\")\n","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"You can install committed datasets by using the hash-value or by providing the path of the compressed archive. Installation using hash-value is supported only for datasets stored in the provenance directory.","category":"page"},{"location":"tutorial/#","page":"Installation Guide","title":"Installation Guide","text":"\n    julia> Retriever.install_sqlite('abalone-age-02ee77.zip')\n    julia> Retriever.install_sqlite('abalone-age', '02ee77')\n","category":"page"}]
}
